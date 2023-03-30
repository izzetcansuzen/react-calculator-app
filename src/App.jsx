import {CalculatorResult, CalculatorHeader, CalculatorMain} from "./components/index.js";
import {useState} from "react";

export default function App(){
    const  [calculateValue, setCalculateValue] = useState("");
    const  [calculate, setCalculate] = useState([]);

    return(
        <div className="calculator-container">
            <CalculatorHeader />
            <CalculatorResult
                value={calculateValue}
            />
            <CalculatorMain
                value={calculateValue}
                setValue={setCalculateValue}
                calculate={calculate}
                setCalculate={setCalculate}
            />
        </div>
    )
}