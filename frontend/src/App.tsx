import Temp from "./Temp";
import Login from "./authorization/Login";
import Signup from "./authorization/Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Form from "./form/Form";
// import Form2 from "./form/Form2";
// import FormData from "./form/FormData";
function App() {
  return (
    <>
      <h1 className="text-red-500 text-4xl">Levatation</h1>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Signup/>}></Route>
       <Route path='/form' element={<Temp/>}></Route>
       {/* <Route path='/form2' element={<Form2/>}></Route> */}
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
export const BEURI = "https://long-plum-shark-tie.cyclic.app";
