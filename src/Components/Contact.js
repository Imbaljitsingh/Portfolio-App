import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3l6onfj', 'template_kin2kk2', form.current, 'XK-8Mx3ZoxPIvRAu8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
        <div className="flex flex-col justify-center items-center mt-[100px] gap-6 mb-6">
            <div className="text-3xl font-bold">Don't Be Shy, Hit me Up! 👇🏾</div>

            {/* form */}
            <div className='bg-slate-200 rounded-lg w-[30%] px-5 py-3'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col py-3'>
                    <label className='font-semibold text-lg'>Name</label>
                    <input className="border rounded-md mt-2 mb-2 w-full py-2" type="text" name="user_name" />
                    <label className='font-semibold text-lg'>Email</label>
                    <input className="border rounded-md mt-2 mb-2 w-full py-2"type="email" name="user_email" />
                    <label className='font-semibold text-lg'>Message</label>
                    <textarea className="border rounded-md mt-2 mb-2 w-full py-2" name="message" />
                    <button className='bg-blue-500 py-3 w-1/2 mt-4 rounded-md text-white font-bold'>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
