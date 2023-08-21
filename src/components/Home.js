import React, { useState } from 'react'

function Home() {

    const [text, setText] = useState('');
    const textAreaChange = (e) => {
        setText(e.target.value);
    }
    const listenButton = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const clearButton = () => {
        setText('')
    }

    return (
        <><div class="card">
            <div class="card-body">
                <div className="container">

                    <h3 className='my-3 text-center'>You can find out total words and characters of your given text</h3>
                    <div className="my-3">
                        <textarea className="form-control" onChange={textAreaChange} value={text} rows={15} placeholder='Write something'></textarea>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className={`btn btn-primary`} onClick={listenButton} style={{ marginLeft: 7 }} ><i className="fa-solid fa-volume-high"></i><span style={{ marginLeft: 7 }}>Listen</span></button>
                        <button className={`btn btn-primary`} onClick={clearButton} style={{ marginRight: 7 }} ><i class="fa-solid fa-trash"></i><span style={{ marginLeft: 7 }}>Clear</span></button>

                    </div>
                </div>
            </div>
        </div>

            <div className="container my-5">
                <h1>Text summary</h1>
                <p style={{ fontSize: 20, marginLeft: 5 }}>There are {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.replace(/\s/g, '').length} characters</p>


            </div>
        </>
    )
}

export default Home
