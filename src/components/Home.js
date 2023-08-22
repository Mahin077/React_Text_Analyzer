import React, { useState, useEffect } from 'react'
function Home(props) {
    const websiteName = "Text Analyzer";
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

    //to change the title according to the operation name
    useEffect(() => {
        document.title = websiteName + " - " + props.operationName
    }, [props.operationName])

    return (
        <>
            <div className={`card text-${props.mode === 'light' ? 'black' : 'white'}`} style={props.mode === 'light' ? { backgroundColor: 'white' } : { backgroundColor: 'rgb(24, 24, 24)' }}>
                <div className="card-body">
                    <div className="container">

                        <h3 className="my-3 text-center">{props.title}</h3>
                        <div className="my-3">
                            <textarea className={`form-control text-${props.mode === 'light' ? 'black' : 'white'}`} onChange={textAreaChange} value={text} rows={15} placeholder='Write something' style={props.mode === 'light' ? { backgroundColor: 'white' } : { backgroundColor: '#575757' }}></textarea>
                        </div>
                        <div className="d-flex justify-content-between">
                            {props.operationName === "wordCounter" && (<button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'}`} onClick={listenButton} style={{ marginLeft: 7 }} ><i className="fa-solid fa-volume-high"></i><span style={{ marginLeft: 7 }}>Listen</span></button>)}
                            {props.operationName !== "wordCounter" && (<button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'}`} onClick={opertaionButton} style={{ marginLeft: 7 }} ><i className="fa-solid fa-gears"></i><span style={{ marginLeft: 7 }}>{props.btName}</span></button>)}
                            <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'}`} onClick={clearButton} style={{ marginRight: 7 }} ><i className="fa-solid fa-trash"></i><span style={{ marginLeft: 7 }}>Clear</span></button>

                        </div>
                    </div>
                </div>
            </div>

            {props.operationName === "wordCounter" && (
                <div className={`container my-5 text-${props.mode === 'light' ? 'black' : 'white'}`}>
                    <h1>Text summary</h1>
                    <p style={{ fontSize: 20, marginLeft: 5 }}>There are {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.replace(/\s/g, '').length} characters</p>
                </div>
            )}

            {props.operationName === "replaceWords" && (

                <div className="container my-5" >
                    <div className="card" style={props.mode === 'light' ? { backgroundColor: 'white' } : { backgroundColor: 'rgb(24, 24, 24)' }}>
                        <div className="card-body">
                            <label className={`my-2 text-${props.mode === 'light' ? 'black' : 'white'}`} style={{ fontSize: 18, marginLeft: 7 }}>Old Word</label>
                            <textarea id="tb1" placeholder='write the old word that need be to replace' className={`form-control text-${props.mode === 'light' ? 'black' : 'white'}`} rows={1} style={props.mode === 'light' ? { backgroundColor: 'white' } : { backgroundColor: '#575757' }}></textarea>
                            <label className={`my-2 mt-5 text-${props.mode === 'light' ? 'black' : 'white'}`} style={{ fontSize: 18, marginLeft: 7 }}>New Word</label>
                            <textarea id="tb2" placeholder='write the new word that you want to use in the text' className={`form-control text-${props.mode === 'light' ? 'black' : 'white'}`} rows={1} style={props.mode === 'light' ? { backgroundColor: 'white' } : { backgroundColor: '#575757' }}></textarea>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
