import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  News,
  Cryptocurrency,
  Cryptodetails,
  Exchanges,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchnages" element={<Exchanges />} />
              <Route exact path="/news" element={<News />} />
              <Route
                exact
                path="/cryptocurrency"
                element={<Cryptocurrency />}
              />
              <Route
                exact
                path="/cryptodetails/:coinID"
                element={<Cryptodetails />}
              />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptonation <br />
            All Rights Reserved
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchnages">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default App;
