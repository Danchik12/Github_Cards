import React from 'react'
import {Alert} from './components/Alert'
import {Navbar} from './components/Navigation/Navbar'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Profile} from './pages/Profile'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {AlertState} from './context/Alert/alertState'
import {GithubState} from './context/GitHub/githubState'
function App() {
  return (
    <GithubState>
    <AlertState>
    <BrowserRouter>
    <Navbar />

    <div className='container '>
    <Alert />

    <Routes>
<Route exact path='/Github_Cards'  element={<Home/>}/>
<Route path='/profile/:name' element={<Profile/>}/>
<Route path='/about' element={<About/>}/>


    </Routes>
</div>
    </BrowserRouter>
    </AlertState>
    </GithubState>
  );
}

export default App;
