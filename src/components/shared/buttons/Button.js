import React from "react";
import "./Button.css";

const Button = (props) => {
    return(
        <>
        <button type="button" className={`btn btn-${props.name.toLowerCase()}`}> {props.name} </button>
        </>
    );
}

export default Button;
