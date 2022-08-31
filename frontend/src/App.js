import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import {Routes,Route} from 'react-router-dom'
import Login from './component/Login/Login';
import Signup from './component/Signup/signup';
import { Datacontexts } from './component/context/Coutercontext';
import Blogbody from './component/Blog/Blogbody';
import Yourblog from './component/Blog/UserStory/UserStory';
import Writeblog from './component/Blog/writeblog/Writeblog';
import Navbar from './component/Navbar';
function App() {
  return (
   <>
 <Datacontexts>
  <Navbar/>
 <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/login" element={ <Login/>}/>
    <Route path="/signup" element={ <Signup/>}/>
    <Route path="/blog/:id" element={<Blogbody/>}/>
    <Route path="/yourblog" element={<Yourblog/>}/>
    <Route path='/writeblog' element={<Writeblog/>}/>
  </Routes>
 </Datacontexts>
   </>
  );
}

export default App;
