import React from "react";

export default function CalculatorResult({value}){
    return(
        <div className="calculator-result">
            <input type="text" className="calculator-input" value={value}/>
        </div>
    )
}