import Login from "./authorization/Login";
import Signup from "./authorization/Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from "./form/Form";
function App() {
  return (
    <>
      <h1 className="text-red-500 text-4xl">Levatation</h1>
      <BrowserRouter>
       <Routes>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Signup/>}></Route>
       <Route path='/form' element={<Form/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
