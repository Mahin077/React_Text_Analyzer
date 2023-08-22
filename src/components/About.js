import React from 'react'

function About() {
    return (<div className="card">
                <div className="card-body">
        <div className="container">
                    <h2 className='text-center'>About This Website</h2><br/>
                    <p>Using our website <strong>Text Analyzer</strong>, you can do lots of tasks. This is basically a text utility website. Text can be manipulated easily according to the users need. So far we have introduced
                        these techniques in our website:<br/><br/>
                        <strong>1. Uppercase</strong> - it helps to uppercase all the letters of a text<br/>
                        <strong>2. Lowercase</strong> - it helps to lowercase all the letters of a text<br/>
                        <strong>3. Remove Extra Space</strong> - it helps to remove any additional spaces from a text<br/>
                        <strong>4. Replace Words</strong> - it helps to replace a particular word in a text<br/>
                        <strong>5. Convert Words</strong> - it helps to break a text into words and show them in new lines individually<br/>
                        <strong>6. Word Counter</strong> - it helps to count words as well as characters in a text<br/><br/>
                        From the Navbar you can choose any option that you prefer and simply use it. In the future, we will add more features related to text analysis which you will be able to access from this website.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
