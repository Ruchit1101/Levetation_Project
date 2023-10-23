import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import React from 'react';
function Form(){
  const [firstname, setFirstName]= useState('');
  const [lastname, setLastName]= useState('');
  const [email, setEmail]= useState('');
  const [phone, setPhone]= useState('');
  const [address1, setAddress1]= useState('');
  const [city, setCity]= useState('');
  const [district, setDistrict] = useState('');
  const [postal, setPostal] = useState('');
  const [region, setRegion] = useState('');
  const [nation, setNation] = useState('');
  const [nextButton, setNextButton] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      address1:'',
      city:'',
      district:'',
      postal:'',
      region:'',
      nation:''
  });
  const handleNextClick = (event: React.FormEvent) => {
  event.preventDefault();
  const target = event.target as HTMLInputElement;
  const { name, value } = target;
  setFormData({
    ...formData,
    [name]: value,
  });
  setNextButton(true);
  navigate('/form2');
  axios.post('http://localhost:3000/form', {firstname,lastname,email,phone,address1,city,district,postal,region,nation}).then((res) => {
    console.log(res);
  }).catch(error => {
    console.log(error);
  });
};
  const resetForm = (): void => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress1('');
    setCity('');
    setDistrict('');
    setPostal('');
    setRegion('');
    setNation('');
    
  };
    return(
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-black">
                Details Form
              </h3>
            </div>
            <form action="#">
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
                      onChange={(event)=>setFirstName(event.target.value)}
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
                      onChange={(event)=>setLastName(event.target.value)}
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
                    onChange={(event)=>setEmail(event.target.value)}
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
                    value={formData.phone}
                    onChange={(event)=>setPhone(event.target.value)}
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
                    value={formData.address1}
                    onChange={(event)=>setAddress1(event.target.value)}
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
                    value={formData.city}
                    onChange={(event)=>setCity(event.target.value)}
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
                    value={formData.district}
                    onChange={(event)=>setDistrict(event.target.value)}
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
                    value={formData.postal}
                    onChange={(event)=>setPostal(event.target.value)}
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
                    value={formData.region}
                    onChange={(event)=>setRegion(event.target.value)}
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
                    value={formData.nation}
                    onChange={(event)=>setNation(event.target.value)}
                    required
                  />
                </div>
                <button className="flex w-full mb-2 justify-center rounded bg-green-500 p-3 font-medium text-white"
                onClick={handleNextClick}>
                  Next
                </button>
                <button className="flex w-full mb-2 justify-center rounded bg-red-500 p-3 font-medium text-white"
                 onClick={resetForm}
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