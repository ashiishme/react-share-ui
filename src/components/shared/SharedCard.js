import React from "react";
import "./SharedCard.css"
import { IconContext } from 'react-icons';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const SharedCard = (props) => {
    let is_negative = props.data?.percent.amount < 0;
    let neg_percent = props.data?.percent.amount.toString().replace(/-/g, '');
    return (
        <div className="card shared-wrap">
            <div className="shared-value">
            <p className="shared-value-text">{props.data?.value.label}</p>
                <p className="shared-value-amount">{props.data?.value.amount}</p>
            </div>
            <div className="shared-percent-value">
                <p className="shared-value-percent">{props.data?.percent.label}</p>
                <p className="shared-percent">
                    {props.data?.type === 'unrealized' && (
                        is_negative ? 
                        <IconContext.Provider value={{color: '#f44336'}}>
                            <FaCaretDown/> 
                        </IconContext.Provider>
                        : 
                        <IconContext.Provider value={{color: '#4caf50'}}>
                            <FaCaretUp/> 
                        </IconContext.Provider>
                    )}
                    {`${neg_percent}%`}
                </p>
            </div>
            <div className="percent-bar-container">
                <p className="percent-bar">
                    <span className={props.class} style={{width: `${neg_percent}%`}}></span>
                </p>
            </div>
        </div>
    );
}

export default SharedCard;