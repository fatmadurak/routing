import React from 'react'
import { Formik } from 'formik';

function Contact() {
  return (
    <div>

     <h1>İletişim</h1>
     <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message:"",
      }}
      onSubmit={async (values) => {
 
        console.log(values)
      }}
    >
    {
    
    (({handleSubmit,handleChange})=>(

      <form onSubmit={handleSubmit} className="form">
        <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane"  onChange={handleChange("firstName")}/>
        </div>

     <div>
     <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe"  onChange={handleChange("lastName")}/>
     </div>
      <div>
  
       <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange("email")}
        />
       </div>
         <div>
          <label htmlFor="message">Message</label>
          <textarea
          id="message"
          name="message"
          placeholder="Your message..."
          onChange={handleChange("message")}
           />
          </div>
        <button type="submit">Submit</button>
      </form>

     ))






    }
    </Formik>

    </div>
  )
}

export default Contact