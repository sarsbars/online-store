import { useForm } from "react-hook-form";

function ContactForm() {
      const { register, handleSubmit, formState:{errors}} = useForm();
      const onSubmit = data => console.log('Form data sudmitted: ', data);
    return(
        <section className="flex column-direction center">
          <h3>Need help? Contact Us</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form flex column-direction">
            <label for='email'>Email</label>
            <input 
              type='text' 
              name='email'
              className='email-input'
              placeholder='Johnsmith@email.com'
              {...register('Email', {
              required: true,
              pattern: /^\S+@\S+$/i
            })}/>
            {errors.Email && <div className="form-error-message"><span>*Email is required or invalid</span></div>}
            <label for='email'>Comment</label>
            <textarea 
              type='text' 
              name='message'
              rows={10}
              cols={30}
              placeholder='Type your message'
              {...register('Meassage', {
              required: true
            })}/>
            {errors.Meassage && <div className="form-error-message"><span>*Message is required</span></div>}
            <input type='submit' value='Submit'/>
          </form>
        </section>
    );
}

export default ContactForm;