import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import About from './about'


function App(){

return (

  <BrowserRouter>
  <div className='App'>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      </Routes>
      </div>
  </BrowserRouter>

);


}


export default App;
