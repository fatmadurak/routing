import './App.css';
import {BrowserRouter, Routes,Route} from   "react-router-dom";
import Home from './Pages/Dashboard/Home';
import Users from './Pages/Dashboard/Users';
import Contact from './Pages/Dashboard/Contact';
import UsersDetail from './Pages/Dashboard/UsersDetail';
import Login from './Pages/Auth/Login';
import DashboardLayout from './components/layouts/Dashboard';
import AuthLayout from './components/layouts/Auth';
import Register from './Pages/Auth/Register';

function App() {
  return (
  <BrowserRouter>

  <Routes>

  <Route path='/' element={<DashboardLayout/>}>

   <Route index element={<Home/>}/>
   <Route path='users' element={<Users/>}/>
   <Route path='users/:id' element={<UsersDetail/>}/> 
   <Route path='contact' element={<Contact/>}/>

  </Route>
  <Route path='auth' element={<AuthLayout/>}>

  <Route index element={<Login/>}/>
  <Route path='register' element={<Register/>}/>
  </Route>
  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
