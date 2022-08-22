import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import MyActivity from './pages/MyActivity/MyActivity';
import NewActivity from './pages/NewActivity/NewActivity';
import UpdateActivity from './pages/UpdateActivity/UpdateActivity';
import Setting from './pages/Setting/Setting';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import Cookies from 'universal-cookie';

const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          {/* { cookies && */}
            <>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/activities' element={<MyActivity />} />
            <Route path='/new' element={<NewActivity />} />
            <Route path='/edit/:activity_id' element={<UpdateActivity />} />
            <Route path='/Setting' element={<Setting />} />
            </>
          {/* } */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
