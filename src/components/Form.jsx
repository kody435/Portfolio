import React from "react";
import { useForm, ValidationError } from "@formspree/react";


function ContactForm() {
  const [state, handleSubmit] = useForm("mlevggel");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (

    <div className="bg-black">
      <div className="w-100 text-5xl flex justify-center pt-36 pb-16">
        <h2 className="text-white">Get in Touch</h2>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-20">
            <label htmlFor="email" className=" text-white mr-10">Email ID</label>
            <input id="email" type="email" name="email" placeholder="Email ID" className=" rounded-xl bg-black text-white border-2 border-gray-400 md:border-2 md:border-gray-400 lg:border-0 xl:border-0 2xl:border-0"  />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="flex flex-col mb-20 ">
            <label htmlFor="message" className=" mr-9 text-white justify-center flex mb-5">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" className="rounded-xl bg-black text-white border-2 border-gray-400 md:border-2 md:border-gray-400 lg:border-0 xl:border-0 2xl:border-0" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <br></br>
          <div className="flex justify-center">
            <button type="submit" disabled={state.submitting} className="rounded-2xl text-white border-2 border-slate-300 px-4 py-2 hover:scale-120 ">
              Submit
            </button>
          </div>

          <div className='pt-24 flex flex-col sm:flex-row md:flex-row w-full items-center text-white'>
            <section className='flex flex-row justify-center w-full items-center place-content-center space-x-10 '>
              <div>
                <a href='/about'>
                  <h2>About</h2>
                </a>
              </div>
              <div>
                <a href='https://github.com/kody435' target="_blank" rel="noreferrer">
                  <box-icon type='logo' name='github' animation='tada-hover' color='#ffffff'></box-icon>
                </a>
              </div>
              <div>
                <a href='https://twitter.com/Param435_' target="_blank" rel="noreferrer">
                  <box-icon type='logo' name='twitter' animation='tada-hover' color='#ffffff'></box-icon>
                </a>
              </div>
              <div>
                <a href='https://telegram.me/Param435' target="_blank" rel="noreferrer">
                  <box-icon type='logo' name='telegram' animation='tada-hover' color='#ffffff'></box-icon>
                </a>
              </div>
            </section>
          </div>

          <div className=" pb-10">
            <p className="text-white text-sm text-center pt-10">Copyright © Param's Portfolio 2022.</p>
          </div>
          
        </form>
      </div>
    </div>

  );
}
function Form() {
  return <ContactForm />;
}
export default Form;
