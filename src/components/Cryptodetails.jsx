import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCoinDetailsQuery } from "../services/cryptoRapidApi";

const Cryptodetails = () => {
  const { coinID } = useParams();
  const { data, isFetching } = useGetCoinDetailsQuery(coinID);

  console.log(data);

  return <div>Hello {coinID}</div>;
};

export default Cryptodetails;
