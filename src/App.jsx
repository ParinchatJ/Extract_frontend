import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import MyActivity from './pages/MyActivity/MyActivity';
import NewActivity from './pages/NewActivity/NewActivity';
import UpdateActivity from './pages/UpdateActivity/UpdateActivity';
import Setting from './pages/Setting/Setting';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/activities' element={<MyActivity/>}/>
          <Route path='/new' element={<NewActivity/>}/>
          <Route path='/edit/:activity_id' element={<UpdateActivity />}/>
          <Route path='/Setting' element={<Setting />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
