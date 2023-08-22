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
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="container">

                        <h3 className='my-3 text-center'>You can find out total words and characters of your given text</h3>
                        <div className="my-3">
                            <textarea className="form-control" onChange={textAreaChange} value={text} rows={15} placeholder='Write something'></textarea>
                        </div>
                        <div className="d-flex justify-content-between">
                            {props.operationName === "wordCounter" && (<button className={`btn btn-primary`} onClick={listenButton} style={{ marginLeft: 7 }} ><i className="fa-solid fa-volume-high"></i><span style={{ marginLeft: 7 }}>Listen</span></button>)}
                            {props.operationName !== "wordCounter" && (<button className={`btn btn-primary`} onClick={opertaionButton} style={{ marginLeft: 7 }} ><i class="fa-solid fa-gears"></i><span style={{ marginLeft: 7 }}>{props.btName}</span></button>)}
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
        </>
    )
}

export default Home
