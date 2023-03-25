import React, { useState, useEffect } from 'react';

import millify from 'millify';
import {Link} from 'react-router-dom';
import {Card, Row, Col, Input} from 'antd';
import { useGetCryptosQuery } from '../api/cryptoApi';


const Cryptocurrencies = ( {simplified} ) => {
  // count will be set to 10 in a simplified view and 100 in other views
  const count = simplified ? 10 : 1000;

  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  console.log(cryptos)

  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return 'Loading Data. . .'

  return (
    <>
    {/* If not simplified, then render this. . . */}
    {!simplified && (
      <div className="searchCrypto">
        <Input placeholder='Search Cryptocurrency' onChange={(event) => setSearchTerm(event.target.value)} />
      </div>
    )}


      {/* Gutter used for spacing (antd) */}
      <Row gutter={[32,32]} className='cryptoCardContainer'>
        {cryptos?.map((coin) => (
          <Col xs={24} sm={12} lg={6} className='cryptoCard' key={coin.uuid}>
            <Link to={`/coin/${coin.uuid}`}>
              <Card 
                title={`${coin.rank}. ${coin.name}`}
                extra={<img className='cryptoImg' src={coin.iconUrl} />}
                hoverable
              >
                Symbol: ${coin.symbol} <br></br>
                Price: ${millify(coin.price)} <br></br>
                Market Cap: ${millify(coin.marketCap)} <br></br>
                Daily Change: {coin.change}% <br></br>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies