import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup(){
    const [username, setUsername]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate();
    const handleClick=(event:React.FormEvent)=>{
       event.preventDefault();
       axios.post('http://localhost:3000/register',{username, email, password}).then((res)=>{
        console.log(res)
       navigate('/login')
      })
      .catch(error=>{
        console.log(error);
      });
    };
    return(
     <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-9">
         
          {/* <!-- Sign Up Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-black">
                Sign Up Form
              </h3>
            </div>
            <form onSubmit={handleClick}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(event)=>setUsername(event.target.value)}
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(event)=>setEmail(event.target.value)}
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(event)=>setPassword(event.target.value)}
                  />
                </div>

                <div className="mb-5.5">
                  <label className="mb-2.5 block text-black dark:text-black">
                    Re-type Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-blue-500 p-3 font-medium text-white">
                  Sign Up
                </button>
                <p>Already Have an account</p>
                <Link to="/login" className="flex w-full justify-center rounded bg-blue-500 p-2 mt-3 font-medium text-white">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
        
    )
}

export default Signup;