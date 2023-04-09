import React from "react";
import Blog1 from "../../img/blog1.jpg";
import Blog2 from "../../img/blog2.jpg";
import Blog3 from "../../img/blog3.jpg";

const Blogs = () => {
  return (
    <div className="bg-[#2f3247] px-20 ">
      <div className="py-20">
        <div className="text-center m-auto mb-20 md:w-1/2">
          <h4 className="font-bold text-orange-500 mb-5 text-xl">
            Innovation And Quality Improvement
          </h4>
          <h1 className="text-5xl font-semibold">
            Latest Updates, Solutions And Company News
          </h1>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
              <img
                src={Blog1}
                alt=""
                className="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>

            <div>
              <div className="flex items-center gap-5 py-5">
                <p>20 February 2023</p>
                <p>1 min read</p>
              </div>

              <a
                href="#blog"
                className="text-2xl font-bold underline hover:text-orange-500 hover:no-underline"
              >
                Four ways to cheer yourself up on Blue Monday!
              </a>

              <p className="leading-10 my-5">
                On the second edition of Serious Business, Inc. editor Jim
                Ledbetter and Fusion senior editor Salmon debate...
              </p>

              <a
                href="#blog"
                className="inline-block font-bold hover:text-orange-500 transition-all duration-300 ease-in-out"
              >
                <span className="tracking-wider capitalize underline hover:no-underline">
                  Read more
                </span>
              </a>
            </div>
          </div>
          <div>
            <div className="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
              <img
                src={Blog2}
                alt=""
                className="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>

            <div>
              <div className="flex items-center gap-5 py-5">
                <p>20 February 2023</p>
                <p>1 min read</p>
              </div>

              <a
                href="#blog"
                className="text-2xl font-bold underline hover:text-orange-500 hover:no-underline"
              >
                Four ways to cheer yourself up on Blue Monday!
              </a>

              <p className="leading-10 my-5">
                On the second edition of Serious Business, Inc. editor Jim
                Ledbetter and Fusion senior editor Salmon debate...
              </p>

              <a
                href="#blog"
                className="inline-block font-bold hover:text-orange-500 transition-all duration-300 ease-in-out"
              >
                <span className="tracking-wider capitalize underline hover:no-underline">
                  Read more
                </span>
              </a>
            </div>
          </div>
          <div>
            <div className="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
              <img
                src={Blog3}
                alt=""
                className="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>

            <div>
              <div className="flex items-center gap-5 py-5">
                <p>20 February 2023</p>
                <p>1 min read</p>
              </div>

              <a
                href="#blog"
                className="text-2xl font-bold underline hover:text-orange-500 hover:no-underline"
              >
                Four ways to cheer yourself up on Blue Monday!
              </a>

              <p className="leading-10 my-5">
                On the second edition of Serious Business, Inc. editor Jim
                Ledbetter and Fusion senior editor Salmon debate...
              </p>

              <a
                href="#blog"
                className="inline-block font-bold hover:text-orange-500 transition-all duration-300 ease-in-out"
              >
                <span className="tracking-wider capitalize underline hover:no-underline">
                  Read more
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
