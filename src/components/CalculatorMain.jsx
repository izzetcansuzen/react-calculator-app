import React, {useState, useEffect} from "react";

export default function CalculatorMain({value, setValue, calculate, setCalculate}){

    /*
            when user gets a result it must be equal to last calculated value -done
            when user choose theme it should be saved -done
            when user clicks more to same operator alert has come -done
     */

    //when user clicks any number
    function handleClick(e){
        const value = e.target.innerText;
        setValue(oldValue => {
            return `${oldValue + value}`
        })
    }

    //when user clicks any operator
    function handleCalculate(e){
        if(calculate[calculate.length - 1] === e.target.innerText){
            alert("operator is not same old value")
        }else{
            setCalculate(oldValue =>{
                return [...oldValue, value, e.target.innerText]
            })
        }
        if(e.target.innerText === "="){
            let text = ""
            calculate.forEach(item => {
                text += item
            })
            setCalculate(text + value);
        }
    }

    //DEL
    function handleDelete(){
        setValue("");
    }

    function setCalculateValueWihtValue() {
        setCalculate([value.substring(1)])
    }

    useEffect(() => {
        if(typeof calculate == "object"){
            if(calculate.length > 0 &&  calculate.includes("+") || calculate.includes("-") || calculate.includes("*") || calculate.includes("/")){
                setValue("")
            }
        }
        if(typeof calculate == "string"){
            setValue(eval(calculate))
            setCalculateValueWihtValue()
        }
    },[calculate])

    function handleReset(e) {
        setValue("");
        setCalculate([]);
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
            <button className="red button-calculate" id="result" onClick={handleCalculate}>=</button>
        </div>
    )
}