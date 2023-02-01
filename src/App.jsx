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

  return (
    <div className="App">
      <Header/>
      <div className='flex'>
      <Markdown converter={converter}/>
      <Preview text = {html}/>
      </div>
    </div>
  )
}

export default App;
