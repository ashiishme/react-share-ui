import React from "react";
import SharedCard from "../../shared/SharedCard";
const unrealizedData = {
    type: 'unrealized',
    value: {
        label: 'Unrealized P/L',
        amount: 0
    },
    percent: {
        label: '% Return',
        amount: 0
    }
};
const Unrealized = (props) => {
    unrealizedData.value.amount = props.unrealized_pl;
    unrealizedData.percent.amount = props.return_percent;
    return (
        <SharedCard data={unrealizedData} class={`percent-bar-colored ${(props.return_percent > 0) ? 'percent-bar-colored-inc' : 'percent-bar-colored-dec' }`}/>
    );
}

export default Unrealized;