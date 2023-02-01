import './App.css'
import Header from './components/Header'

import TextContainer from './components/TextContainer'

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='flex'>
      <TextContainer isPreview={false}/>
      <TextContainer isPreview={true}/>
      </div>
    </div>
  )
}

export default App
