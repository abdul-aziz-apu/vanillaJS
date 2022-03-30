import React from "react";

import './Document.css'

class Document extends React.Component {
    state = {
            url : window.location.href
    }

    // React renders all element in a browser window before componentDidMount and re-renders it again after componentDidMount.
    // Console logging window.innerHeight is a good example.

    componentDidMount () {
        this.setState({url: 'https://javascript.info/document'})
    }

    showURL = () => {
        console.log(this.state.url)
     }

    render () {
        return (
            <div className="">
                <h1>Have I done well?</h1>
                <p>{console.log(window.innerHeight)}</p>
                <ul className="list">
                    <li><button onClick={() => {console.log(window.innerHeight)}}>Window Height</button></li>
                    <li><button onClick={() => {document.body.style.background = "red"}}>Click to see the red BG!</button></li>
                    <li><button onClick={() => {console.log(navigator.userAgent)}}>Show Current Browser</button></li>
                    {/* 
                    Platform is deprecated.
                    <li><button onClick={() => {console.log(navigator.platform)}}>Show Current Browser</button></li> 
                    */}
                    <li><button onClick={this.showURL}>Show Current URL</button></li>
                </ul>
            </div>
        )
    }
}

export default Document