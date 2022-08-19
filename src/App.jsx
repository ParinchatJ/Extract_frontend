import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import MyActivity from './pages/MyActivity/MyActivity';
import Community from './pages/Community/Community';
import Setting from './pages/Setting/Setting';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/activities' element={<MyActivity/>}/>
          <Route path='/community' element={<Community />}/>
          <Route path='/Setting' element={<Setting />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
