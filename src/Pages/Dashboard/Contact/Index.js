import React from 'react'
import {useFormik} from 'formik';
import validations from "./Validations";
import "./style.css"

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
        <input id="firstName" name="firstName" placeholder="Jane"  onChange={formik.handleChange("firstName")}  disabled={formik.isSubmitting}     value={formik.values.firstName} onBlur={formik.handleBlur("firstName")}/>

        {formik.errors.firstName && formik.touched.firstName && <div className='error'>
          {formik.errors.firstName}
        </div>}
        </div>

     <div>
     <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe"  onChange={formik.handleChange("lastName")}  disabled={formik.isSubmitting}     value={formik.values.lastName} onBlur={formik.handleBlur("lastName")}/>
        {formik.errors.lastName &&  formik.touched.lastName && <div className='error'>
          {formik.errors.lastName}
        </div>}
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
          onBlur={formik.handleBlur("email")}
        />
           {formik.errors.email &&  formik.touched.email && <div className='error'>
          {formik.errors.email}
        </div>}
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
          onBlur={formik.handleBlur("message")}
           />
              {formik.errors.message &&  formik.touched.message && <div className='error'>
          {formik.errors.message}
        </div>}
          </div>
        <button type="submit" disabled={formik.isSubmitting}>Submit</button>
      </form>

  
    </div>
  )
}

export default Contact