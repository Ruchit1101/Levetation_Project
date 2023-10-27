import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
function Form(){
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    street:'',
    city:'',
    district:'',
    postal:'',
    state:'',
    nation:'',
  });
// const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
//   const { name, value } = event.currentTarget; 
//   setFormData({
//     ...formData,
//     [name]: value, 
//   });
// };

//  const handleNext= async(event:React.FormEvent)=>{
//     event.preventDefault();
   
//     try{
//     const res = await axios.post('http://localhost:3000/form');
//     console.log("Data Saved", res.data);
//     }
//     catch(error){
//       console.log("Error in saving form data");
//       throw(error);
//     }
//  };
//  const resetForm = (event:React.FormEvent)=>{
//   event.preventDefault();
//   // const form = event.target as HTMLFormElement;
  // form.reset();
//  }
    return(
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-black">
                Details Form
              </h3>
            </div>
            <form>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-black">
                      First name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      value={formData.firstname}
                      // onChange={handleChange}
                      required
                      
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-black">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      value={formData.lastname}
                      // onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-black">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={formData.email}
                    //   onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-black">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    // value={formData.phone}
                    //   onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-black">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    placeholder="Street/Village/Area/HouseNo."
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    // value={formData.street}
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-black">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    placeholder="City/Town"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    // value={formData.city}
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-black">
                    District
                  </label>
                  <input
                    type="text"
                    placeholder="District"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    // value={formData.district}
                    //   onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-black">
                    Pin Code
                  </label>
                  <input
                    type="number"
                    placeholder="Postal Address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    // value={formData.postal}
                    //   onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-black">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    // value={formData.state}
                    //   onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="mb-3 block text-black dark:text-black">
                    Nationality
                  </label>
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    // value={formData.nation}
                    // onChange={handleChange}
                    required
                  />
                </div>
                <button className="flex w-full mb-2 justify-center rounded bg-green-500 p-3 font-medium text-white"
                // onClick={}
                >
                  Next
                </button>
                <button className="flex w-full mb-2 justify-center rounded bg-red-500 p-3 font-medium text-white"
                //  onClick={resetForm}
                 >
                  Cancel
                </button>
                
              </div>
            </form>
          </div>
        </div>
   </div>
    )
}
export default Form;