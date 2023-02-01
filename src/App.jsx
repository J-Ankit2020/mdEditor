import React, {useState} from 'react'
import {marked} from 'marked';
import Header from './components/Header'
import MarkDown from './components/MarkDown'
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
      <MarkDown converter={converter}/>
      <Preview text = {html}/>
      </div>
    </div>
  )
}

export default App;
