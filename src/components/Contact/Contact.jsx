import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#1f213f] px-20 py-20 h-screen">
        <div className="text-center m-auto mb-20 md:w-1/2">
        <h4 className="font-bold text-orange-500 mb-5 text-xl">Have A Questation</h4>
         
        <h1 className="text-5xl font-semibold">
            Get in Touch
          </h1>
        </div>

        <form>
          <div className="w-full m-auto text-center md:w-2/3">
            <div className="text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-orange-500"
                placeholder="Name"
              />

              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-orange-500"
                placeholder="Email"
              />

              <input
                type="tel"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-orange-500"
                placeholder="Phone"
              />

              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-orange-500"
                placeholder="Company"
              />
            </div>

            <textarea
              rows="4"
              className="text-slate-900 bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-orange-500"
              placeholder="Message"
            ></textarea>

            <button className="bg-orange-500 mt-6 px-6 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
