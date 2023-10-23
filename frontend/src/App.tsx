import Login from "./authorization/Login";
import Signup from "./authorization/Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from "./form/Form";
import Form2 from "./form/Form2";
function App() {
  return (
    <>
      <h1 className="text-red-500 text-4xl">Levatation</h1>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Signup/>}></Route>
       <Route path='/form' element={<Form/>}></Route>
       <Route path='/form2' element={<Form2/>}></Route>
       {/* <Route path='/data' element={<FormData/>}</Routes> */}
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
