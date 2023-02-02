import React, {useState} from 'react'
import {marked} from 'marked';
import Header from './components/Header'
import Markdown from './components/Markdown'
import Preview from './components/Preview'

function App() {
    const [html, setHtml] = useState("");
    const [rawMD, setRawMD] = useState('')
    const converter = (markdown) => {
      setHtml(marked(markdown));
    }

    const downloadHandler = () => {
        const markdownBlob = new Blob([html], { type: "text/plain" });
        const url = URL.createObjectURL(markdownBlob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "markdown.md";
        link.click();
    }

    const saveHandler = ()=>{
        window.localStorage.setItem("rawMD",rawMD)
        window.alert("Your progress has been saved")
    }

    return (
        <div className="App">
        <Header downloadHandler={downloadHandler} saveHandler={saveHandler}/>
        <div className='flex'>
        <Markdown converter={converter} setMD={setRawMD}/>
        <Preview text = {html}/>
        </div>
        </div>
    )
}

export default App;
