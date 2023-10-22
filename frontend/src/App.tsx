import Login from "./authorization/Login";
import Signup from "./authorization/Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <h1 className="text-blue-500 text-4xl">Vite + React</h1>
      <BrowserRouter>
       <Routes>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Signup/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
