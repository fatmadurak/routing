import React from 'react'
import {useFormik} from 'formik';
import validations from "./Validations"

function Contact() {

  const formik=useFormik({

    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
      message:"",
    },
    onSubmit:async(values,bag) => {
      await new Promise((r)=>setTimeout(r,2000)) 
      console.log(values);
      bag.resetForm();
    },

    validationSchema:validations,


});
  return (
    <div>

     <h1>İletişim</h1>


      <form onSubmit={formik.handleSubmit} className="form">
        <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane"  onChange={formik.handleChange("firstName")}  disabled={formik.isSubmitting}     value={formik.values.firstName}/>
        </div>

     <div>
     <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe"  onChange={formik.handleChange("lastName")}  disabled={formik.isSubmitting}     value={formik.values.lastName}/>
     </div>
      <div>
  
       <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange("email")}
          disabled={formik.isSubmitting}
        />
       </div>
         <div>
          <label htmlFor="message">Message</label>
          <textarea
          id="message"
          name="message"
          placeholder="Your message..."
          onChange={formik.handleChange("message")}
          disabled={formik.isSubmitting}
          value={formik.values.message}
           />
          </div>
        <button type="submit" disabled={formik.isSubmitting}>Submit</button>
      </form>

  
    </div>
  )
}

export default Contact