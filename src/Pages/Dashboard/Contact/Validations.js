import { object, string } from 'yup';

const contactShema = object({
    firstName: string().required(),
    lastName:string().required(),
    email: string().email().required(),
    message:string().min(5).required(),
  
  });

  export default contactShema;