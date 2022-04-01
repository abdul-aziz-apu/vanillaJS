import React from "react";

import Text from '../../components/Text'

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

    showChild = () => {
        for(let i=0; i < document.body.childNodes.length; i++) {
            alert(document.body.childNodes[i])
            };
    }


    render () {
        let description = "There are 12 node types. Entry point is document, element nodes- HTML tags," 
                            + "the tree building blocks, text nodes contain  text, comment, sometimes we can put information there"
                            + "$0.style.background to select the current DOM element. and $1 to select the previous one"

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
                    <li><Text title={'DOM tree'} description={description}/></li>
                    <li><button onClick={this.showChild}>Click here to see the child nodes.</button></li>
                </ul>
            </div>
        )
    }
}

export default Document