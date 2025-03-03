import React, { useState } from "react";

export default function Form(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UPPERCASE", "success")
    };

    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", "success")

    };

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text cleared", "success")
    };

    const handleTitleClick = () => {
        let newText = text.split(" ").map((currentValue) => {
            return currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
        });

        setText(newText.join(" "));
        props.showAlert("Converted to Title", "success")

    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">
                        <h4>{props.heading}</h4>
                    </label>
                    <div className="d-flex justify-content-end my-2">
                        <button className="btn btn-primary mx-1" onClick={handleClearClick} style={{backgroundColor: props.colorS}}>
                            {" "}
                            Clear text
                        </button>
                    </div>
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                        style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode === 'dark'? 'white': 'black'}}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} style={{backgroundColor: props.colorS}}>
                    UPPERCASE
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick} style={{backgroundColor: props.colorS}}>
                    lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleTitleClick} style={{backgroundColor: props.colorS}}>
                    Titilize
                </button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h5>Text Summary</h5>
                <p>
                    {text.split(" ").filter(ele => ele !== "" ).length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
            </div>
        </>
    );
}
