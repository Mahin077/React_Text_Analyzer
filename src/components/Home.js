import React, { useState } from 'react'

function Home(props) {

    const [text, setText] = useState('');

    //for changing the text of the textArea
    const textAreaChange = (e) => {
        setText(e.target.value);
    }
    //listen button - wordCounter/home
    const listenButton = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    //clear button
    const clearButton = () => {
        setText('')
    }
    const opertaionButton = () => {
        //uppercase button 
        if (props.operationName === "uppercase") {
            let newText = text.toUpperCase();
            setText(newText);
        }
        //lowercase button
        else if (props.operationName === "lowercase") {
            let newText = text.toLowerCase();
            setText(newText);
        }
        //remove extra space button
        else if (props.operationName === "removeExtraSpace") {
            let newText = text.split(/ +/);
            setText(newText.join(" "));
        }
        //replace words
        else if (props.operationName === "replaceWords") {
            let oldWord = document.getElementById("tb1").value
            let newWord = document.getElementById("tb2").value
            if (oldWord.length !== 0 && newWord.length !== 0) {
                let oldWordSt = new RegExp(oldWord, "gi");
                let newText = text.replace(oldWordSt, newWord);
                setText(newText);
            }
        }
        //convert to words
        else if (props.operationName === "convertWords") {
            let newText = text.split(" ");
            setText(newText.join("\n"));
        }
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="container">

                        <h3 className='my-3 text-center'>{props.title}</h3>
                        <div className="my-3">
                            <textarea className="form-control" onChange={textAreaChange} value={text} rows={15} placeholder='Write something'></textarea>
                        </div>
                        <div className="d-flex justify-content-between">
                            {props.operationName === "wordCounter" && (<button className={`btn btn-primary`} onClick={listenButton} style={{ marginLeft: 7 }} ><i className="fa-solid fa-volume-high"></i><span style={{ marginLeft: 7 }}>Listen</span></button>)}
                            {props.operationName !== "wordCounter" && (<button className={`btn btn-primary`} onClick={opertaionButton} style={{ marginLeft: 7 }} ><i className="fa-solid fa-gears"></i><span style={{ marginLeft: 7 }}>{props.btName}</span></button>)}
                            <button className={`btn btn-primary`} onClick={clearButton} style={{ marginRight: 7 }} ><i className="fa-solid fa-trash"></i><span style={{ marginLeft: 7 }}>Clear</span></button>

                        </div>
                    </div>
                </div>
            </div>

            {props.operationName === "wordCounter" && (
                <div className="container my-5">
                    <h1>Text summary</h1>
                    <p style={{ fontSize: 20, marginLeft: 5 }}>There are {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.replace(/\s/g, '').length} characters</p>
                </div>
            )}

            {props.operationName === "replaceWords" && (

                <div className="container my-5">
                    <div className="card">
                        <div className="card-body">
                            <label className="my-2" style={{ fontSize: 18, marginLeft: 7 }}>Old Word</label>
                            <textarea id="tb1" placeholder='write the old word that need be to replace' className="form-control" rows={1}></textarea>
                            <label className="my-2 mt-5" style={{ fontSize: 18, marginLeft: 7 }}>New Word</label>
                            <textarea id="tb2" placeholder='write the new word that you want to use in the text' className="form-control" rows={1}></textarea>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
