import React from "react";
import Hero4 from "../../img/hero4.png";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-purple-500 h-80 w-80 absolute top-20 left-5 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
        <div className="bg-orange-400 h-80 w-80 absolute bottom-20 right-5 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
        <div className="px-20 py-20">
          <div className="flex flex-col items-center z-20 md:flex-row">
            <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
              <h1 className="text-5xl font-bold py-4 leading-tight">
                Awesome App for Your Financial. know a little more sit.
              </h1>
              <p className="text-xl py-4">
                This should be used to tell a story and let your users know a
                little more about app and its use, How can benefit them. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Provident
                pariatur vero tempore repudiandae est amet? Accusantium
                asperiores fuga beatae commodi.
              </p>
              <li>Laborum ipsum dolor sit amet adipisicing elit. , consect</li>
              <li>
                consectetur ipsum dolor sit atur adipisicing elit. Laborum, ?
              </li>
              <li>Lorem adipisicing elit. Laborum, consectetur?</li>
              <li> sicing elit. Laborum, consectetur?</li>
              <li>
                {" "}
                dolor sit amet consectetur adipisicing elit. Ipsum at illo
                dolorum. Labore, aut error?
              </li>
              <button className="bg-orange-500 mt-4 px-6 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                Download app
              </button>
            </div>
            <div className="md:w-1/2">
              <img src={Hero4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
