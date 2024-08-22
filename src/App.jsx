import './App.css'
import { HashRouter } from 'react-router-dom'
import Links from './routes/Links'

import Header from './components/nav/Header'




const App = () => {

  return (
    <HashRouter>
      <Header/>
      <Links/>
    </HashRouter>
  )
}

export default App
