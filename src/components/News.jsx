import React, { useState, useEffect } from "react";
import { Card, Row, Col, Typography, Avatar, Select } from "antd";
import { useGetNewsQuery } from "../services/cryptoNewsApi";

import { useGetCoinsQuery } from "../services/cryptoRapidApi";
import Loader from "./Loader";
import moment from "moment";
const { Option } = Select;

const { Text, Title } = Typography;

const demoImage =
  "https://m.foolcdn.com/media/dubs/images/original_imagesoriginal_imageshttpsg.foolcdn.c.width-880_SfbkM9V.jpg";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews, isFetching } = useGetNewsQuery({
    newsCategory,
    count: simplified ? 6 : 20,
  });

  const { data } = useGetCoinsQuery(100);

  console.log(cryptoNews);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(cryptoNews?.value);
  }, [cryptoNews]);

  console.log(news);
  if (isFetching) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {news?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card className="news-card" hoverable>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{
                    maxWidth: "200px",
                    maxHeight: "100px",
                    padding: "0px 10px",
                  }}
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt=""
                  ></Avatar>
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>

                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
