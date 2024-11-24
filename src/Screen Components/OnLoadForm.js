import React, { useState, useTransition } from 'react'
import FormInputs from './FormInputs'
import Textarea from './Textarea'

function OnLoadForm( { formIsVisible , setFormIsVisible }) {

  const [formSubmitStatus, setFormSubmitStatus]=useState(false)
  const [formDisplayStatus, setFormDisplayStatus]=useState(false)
  const [emailInputs, setEmailInputs]=useState('')
  const [phoneInputs, setPhoneInputs]=useState('')
  const [descInputs, setDescInputs]=useState('')


  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Regular expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phoneInputs)) {
      alert("Please enter a correct phone number.");
    } else if (!emailRegex.test(emailInputs)) {
      alert("Please enter a correct email address.");
    } else if (descInputs.trim() === "") {
      alert("Please enter the project description.");
    } else {
      // Both email and phone are valid, proceed with form submission
      setFormSubmitStatus(true);
      // You can also call the next function here if needed
    }
  };

  const onInputChange = (event, placeholder) => {
    const value = event.target.value;

    if (placeholder === "Mail Address") {
      setEmailInputs(value);
    } else if (placeholder === "Phone No.") {
      setPhoneInputs(value);
    }  else if (placeholder === "Description") {
      setDescInputs(value);
    }
  };


  return (
    <div
    style={ formIsVisible ? {display: 'flex'} : {display : 'none'}}
    className={` hidden  fixed bottom-0 right-0 h-auto  justify-center items-end z-[1000] bg-transparent transition-all duration-500 `} >

      <div className='w-full h-full max-h-screen overflow-y-auto flex justify-end items-end'>
        <section style={formDisplayStatus ? {display : 'flex'} : {display : 'none'}}  className="bg-lavender-100 text-darkslategray text-8xl max-w-[350px] flex items-start justify-end  rounded-xl mr-5 mb-5 ml-2 phn:mr-2 phn:mb-2 sphn:max-w-[300px]">

        <svg
        onClick={()=>setFormDisplayStatus(false)}
        className='absolute cursor-pointer mt-3 mr-3' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
        </svg>

  <div class="py-4 px-4  mx-auto max-w-screen-xl text-darkslategray transition-all duration-500">
      <div class="mx-auto max-w-screen-md sm:text-center">
          <h2 class="my-5 text-8xl tracking-tight font-extrabold text-darkslategray   ">Welcome to Wedding By Rishabh !</h2>
          <p  style={!formSubmitStatus ? {display : 'block'} : {display : 'none'}}  class="mx-auto mb-8  font-light text-darkslategray  font-poppins text-[16px] phn:text-[14px]">This platform will help you organize your special day and ensure that everything runs smoothly.</p>
          <p style={formSubmitStatus ? {display: 'block'} : {display: 'none'}} class="mx-auto  font-light text-darkslategray  font-poppins text-[16px] phn:text-[14px] my-20">Thanks for submitting details! We'll be in touch soon.</p>
          <form class="max-w-md mx-auto">

    <div style={!formSubmitStatus ? {display : 'block'} : {display : 'none'} }>

    <FormInputs 
    formInputs={phoneInputs} 
    onInputChange={(e) => onInputChange(e, "Phone No.")}
    placeholder_text={"Phone No."}
    type="number"
    />

    <FormInputs 
    formInputs={emailInputs} 
    onInputChange={(e) => onInputChange(e, "Mail Address")} 
    placeholder_text={"Mail Address"}
    type="email"
    />

    <Textarea 
    descInputs={descInputs}
    onInputChange={(e) => onInputChange(e, "Description")} 
    />
    </div> 

  <button
  style={!formSubmitStatus ? {display : 'block'} : {display : 'none'}}
  onClick={handleSubmit}
   class="text-white bg-darkslateblue-100 hover:bg-darkslateblue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</form>
      </div>
  </div>
    </section>
    <div onClick={()=>setFormDisplayStatus(true)}  style={!formDisplayStatus ? {display : 'flex'} : {display : 'none'}} className='bg-lavender-100 py-3 px-4 pt-5 m-5  rounded-981xl flex items-center justify-center cursor-pointer overflow-hidden '>
     <img src='chat-bot.svg' className='w-10 h-10'/>
     <div className='text-sm fixed right-[27px] bottom-[58px] bg-red-700 w-5 h-5 rounded-981xl text-white font-sans'>1</div>
     </div>
    
  
</div>
    </div>
  )
}

export default OnLoadForm