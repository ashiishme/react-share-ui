import React from "react";
import "./QuantityAverageInvest.css"
import { FaBox, FaPercentage, FaRegMoneyBillAlt } from "react-icons/fa";
const QAI = (props) => {
    return (
        <div className="card qai">
            <div className="qai-item quantity">
                <span className="qai-icon"><FaBox/></span>
                <span className="qai-text">Quantity</span>
                <span className="qai-amount"> {props.quantity} </span>
            </div>
            <div className="qai-item average-cost">
                <span className="qai-icon"><FaPercentage/></span>
                <span className="qai-text">Avg. Cost</span>
                <span className="qai-amount"> ${props.average_cost}</span>
            </div>
            <div className="qai-item invested-amount">
                <span className="qai-icon"><FaRegMoneyBillAlt/></span>
                <span className="qai-text">Invested Amt</span>
                <span className="qai-amount"> ${props.invested_amount} </span>
            </div>
        </div>
    );
}

export default QAI;