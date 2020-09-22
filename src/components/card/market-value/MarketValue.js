import React from "react";
import SharedCard from "../../shared/SharedCard";
const mvData = {
    value: {
        label: 'Market Value',
        amount: '$9542.56'
    },
    percent: {
        label: '% of portfolio value',
        amount: 0
    }
};

const MarketValue = (props) => {
    mvData.percent.amount = `${props.portfolio_value}`;
    return (
        <SharedCard data={mvData} class="percent-bar-colored"/>
    );
}

export default MarketValue;