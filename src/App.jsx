import React, {useState} from 'react'
import {marked} from 'marked';
import Header from './components/Header'
import Markdown from './components/Markdown'
import Preview from './components/Preview'

function App() {
    const [html, setHtml] = useState("");
    const converter = (markdown) => {
      setHtml(marked(markdown));
    }

    const downloadHandler = () => {
     const markdownBlob = new Blob([html], { type: "text/plain" });
     console.log('hello')
    const url = URL.createObjectURL(markdownBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "markdown.md";
    link.click();
    }

  return (
    <div className="App">
      <Header downloadHandler={downloadHandler}/>
      <div className='flex'>
      <Markdown converter={converter}/>
      <Preview text = {html}/>
      </div>
    </div>
  )
}

export default App;
