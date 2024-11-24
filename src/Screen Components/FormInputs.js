import React from 'react'

function FormInputs( { placeholder_text, formInputs,  onInputChange, type  }) {
  return (
    <div className="relative z-0 w-full mb-5 group flex flex-center items-center">
    <input 
      value={formInputs}
      onChange={onInputChange}
      type={type}
      autoComplete="off" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-gray-600 focus:outline-none focus:ring-0  
      peer " 
      placeholder=" " 
      required 
    />
    
    <label 
  
      className="peer-focus:font-medium absolute text-xl w-full flex items-start justify-start text-darkslategray  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-darkslategray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
      {placeholder_text}
    </label>
  </div>
  )
}

export default FormInputs