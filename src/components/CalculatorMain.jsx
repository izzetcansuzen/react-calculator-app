import React from "react";

export default function CalculatorMain(){
    return(
        <div className="calculator-buttons">
            <button className="button-number">7</button>
            <button className="button-number">8</button>
            <button className="button-number">9</button>
            <button className="blue button-calculate">DEL</button>
            <button className="button-number">4</button>
            <button className="button-number">5</button>
            <button className="button-number">6</button>
            <button className="button-number">+</button>
            <button className="button-number">1</button>
            <button className="button-number">2</button>
            <button className="button-number">3</button>
            <button className="button-number">-</button>
            <button className="button-number">.</button>
            <button className="button-number">0</button>
            <button className="button-number">/</button>
            <button className="button-number">x</button>
            <button className="blue button-calculate" id="reset">RESET</button>
            <button className="red button-calculate" id="result">=</button>
        </div>
    )
}