import { GlobeAltIcon, LinkIcon, PaperAirplaneIcon, WifiIcon } from "@heroicons/react/24/solid";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#181a2a] relative ">
        <div className=" py-14 px-20">
          <div className="grid gap-10 md:grid-cols-3 pb-10">
            <div className="space-y-6">
              <h4 className="font-bold text-lg">About App</h4>
              <p className="leading-relaxed">
                This Should Be Used To Tell A Story And Include Any Testimonials
                You Might Have About Your Product Or Service For Your Clients
              </p>
              <div className="flex gap-5 items-center">
                <p>Follow Us</p>
                <GlobeAltIcon className="h-6 w-6 text-white cursor-pointer hover:text-orange-500" />
                <WifiIcon className="h-6 w-6 text-white cursor-pointer hover:text-orange-500" />
                <LinkIcon className="h-6 w-6 text-white cursor-pointer hover:text-orange-500" />
              </div>
            </div>
            <div className="flex justify-between md:justify-around">
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Quick Links</h4>
                <ul className="space-y-3">
                  <li className="underline hover:no-underline hover:text-orange-500">
                    <a href="#">Home</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-orange-500">
                    <a href="#features">Features</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-orange-500">
                    <a href="#testimonial">Testimonial</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-orange-500">
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-orange-500">
                    <a href="#blog">Blog</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-orange-500">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="font-bold text-lg">Help</h4>
                <ul className="space-y-3">
                  <li className="underline hover:no-underline hover:text-orange-500">
                    <a href="#">About Us</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-orange-500">
                    <a href="#features">Partners</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-orange-500">
                    <a href="#testimonial">Career</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-orange-500">
                    <a href="#pricing">Reviews</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-orange-500">
                    <a href="#blog">Terms & Conditions</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-orange-500">
                    <a href="#contact">Help</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Newsletter</h4>
              <p className="leading-relaxed">
                Subscribe With Email And Loads Of News Will Be Sent To You
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-3/4 text-color-gray bg-color-white p-2 lg:p-3 rounded-l-md focus:outline-none"
                  placeholder="Enter Your Email"
                />

                <button
                  type="submit"
                  className="bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90"
                >
                  <PaperAirplaneIcon className="h-6 w-6 text-white cursor-pointer hover:text-orange-500" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-10 border-t border-color-gray">
            <p>2023 &copy; Nasim<span className="text-orange-500">Droid</span> All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
