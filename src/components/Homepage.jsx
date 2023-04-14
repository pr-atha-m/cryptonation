import React from "react";
import millify from "millify";
import { Card, Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCoinsQuery } from "../services/cryptoRapidApi";
import { Cryptocurrency, News } from "./";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCoinsQuery(10);
  const stats = data?.data?.stats;
  console.log(data);
  console.log(stats);
  if (isFetching) {
    return "Loading..";
  }
  return (
    <>
      <Title level={2}>Global Crypto Stats</Title>
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Card hoverable>
            <Statistic title="Cryptocurrencies" value={millify(stats.total)} />
          </Card>
        </Col>

        <Col span={12}>
          <Card hoverable>
            <Statistic
              title="Total Exchanges"
              value={millify(stats.totalExchanges)}
            />
          </Card>
        </Col>

        <Col span={12}>
          <Card hoverable>
            <Statistic
              title="Total Market Cap"
              value={millify(stats.totalMarketCap)}
            />
          </Card>
        </Col>

        <Col span={12}>
          <Card hoverable>
            <Statistic
              title="Total 24h Volume"
              value={millify(stats.total24hVolume)}
            />
          </Card>
        </Col>

        <Col span={12}>
          <Card hoverable>
            <Statistic
              title="Total Markets"
              value={millify(stats.totalMarkets)}
            />
          </Card>
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies
        </Title>

        <Title level={3} className="show-more">
          <Link to="/cryptocurrency">Show More</Link>
        </Title>
      </div>
      <Cryptocurrency simplified={true} />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>

        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified={true} />
    </>
  );
};

export default Homepage;
