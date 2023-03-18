import React from "react";

const Contact = () => {
   return (
      <div id="contact" className="max-w-[1200px] m-auto md:pl-20 p-4 py-16">
         <h1 className="py-4 text-4xl font-bold text-center text-[#041776]">
            Contacts
         </h1>
         <form
            action="https://getform.io/f/9a24b10a-6c07-4940-8a9b-3b59cdf236e4"
            method="POST"
            encType="multipart/form-data"
         >
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
               <div className="flex flex-col">
                  <label className="uppercase text-sm py-2 pl-2">Name</label>
                  <input
                     className="border-2 rounded-lg p-3 flex border-gray-300"
                     type="text"
                     name="name"
                     placeholder="Enter your name"
                  />
               </div>
               <div className="flex flex-col">
                  <label className="uppercase text-sm py-2 pl-2">Email</label>
                  <input
                     className="border-2 rounded-lg p-3 flex border-gray-300"
                     type="email"
                     name="email"
                     placeholder="Enter your email address"
                  />
               </div>
            </div>
            <div className="flex flex-col">
               <label className="uppercase text-sm py-2 pl-2">Message</label>
               <textarea
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  placeholder="You want to discuss about your project? I'm Available"
               ></textarea>
            </div>
            <button className="bg-[#041776] text-gray-100 w-full p-4 mt-4 rounded-lg">
               Send
            </button>
         </form>
      </div>
   );
};

export default Contact;
