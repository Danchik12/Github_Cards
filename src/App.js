import React from 'react'
import {Navbar} from './components/Navigation/Navbar'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Profile} from './pages/Profile'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className='container '>
    <Routes>
<Route path='/Github_Cards' exact element={<Home/>}/>
<Route path='/profile/:name' element={<Profile/>}/>
<Route path='/about' element={<About/>}/>


    </Routes>
</div>
    </BrowserRouter>
  );
}

export default App;
