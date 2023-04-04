import React, { useState } from 'react'
import Socials from './Socials'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wdl2pxm', 'template_wgjywnp', e.target, '4C4jlz9zmqANPKvjx')
      .then((result) => {
        console.log('Message Sent!');
        alert('Message Sent!')
      }, (error) => {
        console.log(error.text);
        alert(`I'm sorry, but your message failed to deliver. Please try again! If the problem persists, you can reach me at FrischeEvan@gmail.com.`)
      });
    setName('');
    setEmail('');
    setMessage('');
  };


  return (
        <div id='contact' className='w-full lg:h-screen m-20 max-w-[90vw] mx-10 mt-[30%] scroll-mt-36'>
            <h1 className='text-[#6a1a2b] pb-1 mb-6 uppercase tracking-wider'>CONTACT ME</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-[90vw] lg:w-[90vw] mb-20 lg:mb-40">

              <div className='flex flex-start mt-5'>
                <div className='flex flex-col w-[30vw] lg:w-[40vw]'>
                  <label htmlFor="name" className="font-bold uppercase">Full Name:</label>
                  <input type="text" id="name" name="name" className="p-1 rounded-lg shadow-lg w-full" 
                  onChange={(e) => {
                    setName(e.target.value);
                  }}  value={name}
                  required />
                </div>

                <div className='flex flex-col ml-5 w-[30vw] lg:w-[40vw]'>
                  <label htmlFor="email" className="font-bold uppercase">Email:</label>
                  <input type="email" id="email" name="email" className="p-1 rounded-lg shadow-lg w-full" 
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}  value={email} 
                  required />
                </div>
              </div>

              <label htmlFor="message" className="font-bold uppercase mt-4">Message:</label>
              <textarea id="message" name="message" className="w-[85vw] p-1 mt-2 rounded-lg shadow-lg lg:w-[90vw] h-[15vw]" 
              onChange={(e) => {
                setMessage(e.target.value);
              }}  value={message} 
              required></textarea>

              <input type="submit" value="Submit" className="bg-[#6a1a2b] text-white font-bold py-2 mt-5 rounded-full hover:bg-[#631828] transition duration-300 w-[85vw] lg:w-[90vw]" />
            </form>
            <Socials />
        </div>
  )
}

export default Contact