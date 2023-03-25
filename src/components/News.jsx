import React, { useState, useEffect } from 'react';

import {Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../api/cryptoNewsApi';
import { useGetCryptosQuery } from '../api/cryptoApi';

const {Text, Title} = Typography;
const {Option} = Select;

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const News = ( {simplified} ) => {
  const count = simplified ? 3 : 9;
  const [newsCategory, setNewsCategory] = useState('Crypto');
  const {data: cryptoNews} = useGetCryptoNewsQuery(newsCategory, count);

  const { data } = useGetCryptosQuery(100);

  console.log(cryptoNews);

  if (!cryptoNews?.value) return 'Loading News. . .'

  return (
    <>
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='selectNews'
            placeholder="Search Crypto News"
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value='Crypto'>All News</Option>
            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='newsCard'>
            <a href={news.url} target="_blank" rel='noreferrer'>
              <div className="newsImgContainer">
                <Title className='newsTitle' level={4}>
                  {news.name}
                </Title>
                <img style={{maxWidth: '100px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt='Crypto News'/>
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0,100)}...`
                : news.description}
              </p>
              <div className="providerContainer">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="Crypto News" />
                  <Text className='providerName'>
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf('ss').fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default News