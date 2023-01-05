import './App.css';
import {BrowserRouter, Routes,Route} from   "react-router-dom";
import Home from './Pages/Home';
import Users from './Pages/Users';
import Contact from './Pages/Contact';
import Menu from './components/Menu';
import UsersDetail from './Pages/UsersDetail';

function App() {
  return (
  <BrowserRouter>
  <Menu/>
  <Routes>

   <Route index element={<Home/>}/>
   <Route path='users' element={<Users/>}/>
    <Route path='users/:id' element={<UsersDetail/>}/> 
   <Route path='contact' element={<Contact/>}/>

  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
