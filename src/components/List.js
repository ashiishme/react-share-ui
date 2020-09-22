import React from "react";
import { Scrip, QAI, MarketValue, Unrealized } from "./card";
import Button from "./shared/buttons/Button";
import { useShareContext } from "../hooks/useShareContext";
const List = () => {
  const {
    id,
    scrip,
    quantity,
    price,
    average_cost,
    invested_amount,
    portfolio_value,
    unrealized_pl,
    return_percent
  } = useShareContext();
  return (
    <>
      <li key={id} className="scrip-item">
        <div className="card-container">
          <Scrip scrip={scrip} price={price}/>
          <QAI quantity={quantity} average_cost={average_cost} invested_amount={invested_amount}/>
          <MarketValue portfolio_value={portfolio_value}/>
          <Unrealized unrealized_pl={unrealized_pl} return_percent={return_percent}/>
          <div className="card">
            <Button name="Buy"/>
            <Button name="Sell"/>
          </div>
        </div>
      </li>
    </>
  );
};

export default List;
