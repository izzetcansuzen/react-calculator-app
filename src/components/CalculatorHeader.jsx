import React, {useEffect, use, useState} from "react";

export default function CalculatorHeader(){
    const [selectedID, setSelectedId] = useState("theme1");

    function handleChange(e){
        const id = e.target.id;
        document.body.className = id;
        setSelectedId(id);
    }

    return(
        <div className="calculator-header">
            <span className="brand">calc</span>
            <div className="theme">
                <p className="theme-text">Theme</p>
                <div className="themes-container">
                    <div className="theme-select">
                        <label htmlFor="theme1">
                            <span>1</span>
                            <div className="custom-select first">
                                <div className={`inner ${selectedID === "theme1" ? "active" : "" }`}></div>
                            </div>
                        </label>
                        <input type="radio" name="theme" id="theme1" onChange={handleChange}/>
                    </div>
                    <div className="theme-select">
                        <label htmlFor="theme2">
                            <span>2</span>
                            <div className="custom-select">
                                <div className={`inner ${selectedID === "theme2" ? "active" : "" }`}></div>
                            </div>
                        </label>
                        <input type="radio" name="theme" id="theme2" onChange={handleChange}/>
                    </div>
                    <div className="theme-select">
                        <label htmlFor="theme3">
                            <span>3</span>
                            <div className="custom-select third">
                                <div className={`inner ${selectedID === "theme3" ? "active" : "" }`}></div>
                            </div>
                        </label>
                        <input type="radio" name="theme" id="theme3" onChange={handleChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}