import { useState } from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
      const [userName, setUserName] = useState('');
      const { register, handleSubmit, formState:{errors}, watch} = useForm();
      const watchedUserName = watch("Username");
    
    //   useEffect(() => {
    //     if (watchedUserName !== undefined) {
    //       setUserName(watchedUserName.trim());
    //     }
    //   }, [watchedUserName]);
      
      // const handleChange = event => {
        //   setUserName(event.target.value.trim());
        // }
        
        // console.log(`Updated Username: ${userName}`);
      const onSubmit = data => console.log('Form data sudmitted: ', data);
    return(
         <section className="flex column-direction center">
          <h2>Need help? Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <input 
              type='text' 
              className='email-input'
              placeholder='Email'
              {...register('Email', {
              required: true,
              pattern: /^\S+@\S+$/i
            })}/>
            {errors.Email && <div className="error-message"><span>*Email is required or invalid</span></div>}
            <textarea 
              type='text' 
              placeholder='Type your message'
              {...register('Meassage', {
              required: true,
              style: "resize: none"
            })}/>
            {errors.Meassage && <div className="error-message"><span>*Message is required</span></div>}
            <input type='submit' value='Submit'/>
          </form>
          <div>
            <p>{userName.length > 0 ? `Selected name: ${watchedUserName}` : ''}</p>
          </div>
        </section>
    );
}

export default ContactForm;