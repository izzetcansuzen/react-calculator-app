import {CalculatorResult, CalculatorHeader, CalculatorMain} from "./components/index.js";

export default function App(){
    return(
        <div className="calculator-container">
            <CalculatorHeader />
            <CalculatorResult />
            <CalculatorMain />
        </div>
    )
}