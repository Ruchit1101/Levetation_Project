import Login from "./authorization/Login";
import Signup from "./authorization/Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from "./form/Form";
import Form2 from "./form/Form2";
// import FormData from "./form/FormData";
import axios from "axios";
import { UserContextProvider } from "./authorization/UserContext";
function App() {
  axios.defaults.baseURL = 'http://localhost:3000'
  axios.defaults.withCredentials = true;
  return (
    <>
      <h1 className="text-red-500 text-4xl">Levitation</h1>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
       <Route path='/login' element={<Login/>}></Route>
       <UserContextProvider>
       <Route path='/register' element={<Signup/>}></Route>
       </UserContextProvider>
       <Route path='/form' element={<Form/>}></Route>
       <Route path='/form2' element={<Form2/>}></Route>
       {/* <Route path='/data' element={<FormData/>}></Route> */}
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
