import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter> {/*  페이지 이동 */}
      <Routes>
        <Route path='/' element={<Login/>}/> 
        {/* '/'경로일 경우 Login컴포넌트 표시 */}
        <Route path='/signup' element={<Signup/>}/>
        {/* '/signup'경로일 경우 Signup컴포넌트 표시 */}
        <Route path='/main_content' element={<MainPage/>}/>
        {/* '/main_content' 경로일 경우 MainPage 컴포넌트 표시 */}
      </Routes>
    </BrowserRouter>
   

 
  );
}

export default App;
