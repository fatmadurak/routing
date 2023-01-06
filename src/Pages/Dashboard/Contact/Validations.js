import { object, string } from 'yup';


const required_message="Bu alan zorunludur:(";
const contactShema = object({
    firstName: string().required(required_message),
    lastName:string().required(required_message),
    email: string().email().required(required_message),
    message:string().min(5).required(required_message),
  
  });

  export default contactShema;