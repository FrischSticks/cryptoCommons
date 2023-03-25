import React from 'react';

import millify from 'millify';
import {Typography, Row, Col, Statistic} from 'antd';
import { useGetCryptosQuery } from '../api/cryptoApi';
import { Link } from 'react-router-dom';

import {Cryptocurrencies, News} from '../components';

const {Title} = Typography;


const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  if(isFetching) return 'Loading Data. . .'
  
  return (
    // Empty React Fragment <> </>
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        {/* A span of 24 is 100% width in Ant Design */}
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={millify(globalStats.total)}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={globalStats.totalExchanges}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Volume (24h)" value={millify(globalStats.total24hVolume)}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/>
        </Col>
      </Row>

      <div className="homeHeadingContainer">
        <Title level={2} className='homeTitle'>Top 10 Cryptocurrencies</Title>
        <Title level={3} className='showMore'>
          <Link to='/cryptocurrencies'>Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />

      <div className="homeHeadingContainer">
        <Title level={2} className='homeTitle'>Latest Crypto News</Title>
        <Title level={3} className='showMore'>
          <Link to='/news'>Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  )
}

export default HomePage