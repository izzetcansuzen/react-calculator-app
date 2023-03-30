import React, {useState, useEffect} from "react";

export default function CalculatorMain({value, setValue, calculate, setCalculate}){

        const [submitValue, setSubmitValue] = useState(null);

        //When number clicks
        function handleClick(e){
                const value = e.target.innerText;
                setValue(oldValue => {
                        return `${oldValue + value}`
                })
        }

        useEffect(() => {
                setValue("")
        },[calculate])

        function handleCalculate(e){
                setCalculate(oldValue =>{
                        return [...oldValue, value, e.target.innerText]
                })
        }

        //DEL
        function handleDelete(){
                setValue("");
        }

        function handleSubmit(e) {
                let text = ""
                calculate.forEach(item => {
                        text += item
                })
                setSubmitValue(text+value)
        }

        useEffect(() => {
                if(submitValue){
                        setValue(eval(submitValue))
                }
        },[submitValue])

        function handleReset(e) {
                setValue("");
                setCalculate("");
                setSubmitValue([]);
        }

    return(
        <div className="calculator-buttons">
            <button className="button-number" onClick={handleClick}>7</button>
            <button className="button-number" onClick={handleClick}>8</button>
            <button className="button-number" onClick={handleClick}>9</button>
            <button className="blue button-calculate" onClick={handleDelete}>DEL</button>
            <button className="button-number" onClick={handleClick}>4</button>
            <button className="button-number" onClick={handleClick}>5</button>
            <button className="button-number" onClick={handleClick}>6</button>
            <button className="button-number" onClick={handleCalculate}>+</button>
            <button className="button-number" onClick={handleClick}>1</button>
            <button className="button-number" onClick={handleClick}>2</button>
            <button className="button-number" onClick={handleClick}>3</button>
            <button className="button-number" onClick={handleCalculate}>-</button>
            <button className="button-number" onClick={handleCalculate}>.</button>
            <button className="button-number" onClick={handleClick}>0</button>
            <button className="button-number" onClick={handleCalculate}>/</button>
            <button className="button-number" onClick={handleCalculate}>*</button>
            <button className="blue button-calculate" id="reset" onClick={handleReset}>RESET</button>
            <button className="red button-calculate" id="result" onClick={handleSubmit}>=</button>
        </div>
    )
}