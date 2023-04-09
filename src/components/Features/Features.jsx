import { CalendarIcon, ChartBarIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Features = () => {
  const navigation = useNavigation()
  if(navigation.state === 'loading'){
     return <LoadingSpinner />
  }
  return (
    <div className="bg-[#2e324b] px-20 py-20">
      <div className="py-20">
        <div className="text-center m-auto mb-20 md:w-1/2">
          <h4 className="font-bold text-orange-500 mb-5 text-xl">Our Futures</h4>
          <h1 className="text-5xl font-semibold">
            Easy To Manage Your All Payments By Our App
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-solid border-gray-400 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-[#010417] ease-in duration-200">
            <div className="bg-orange-500 inline-block rounded-2xl py-6 px-6">
              <CalendarIcon className="h-6 w-6 text-white" />
             
            </div>
            <div>
            <h3 className="text-2xl font-bold py-4">Expense Trackering</h3>
              <p className="leading-12">
                We use an application designed a testing gnose to keep away
              </p>
            </div>
          </div>
          <div className="border-2 border-solid border-gray-400 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-[#010417] ease-in duration-200">
            <div className="bg-orange-500 inline-block rounded-2xl py-6 px-6">
              <ChartBarIcon className="h-6 w-6 text-white" />
             
            </div>
            <div>
            <h3 className="text-2xl font-bold py-4">Finance Snapshot</h3>
              <p className="leading-12">
              We use an application designed a testing gnose to keep away
              </p>
            </div>
          </div>
          <div className="border-2 border-solid border-gray-400 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-[#010417] ease-in duration-200">
            <div className="bg-orange-500 inline-block rounded-2xl py-6 px-6">
              <PhoneIcon className="h-6 w-6 text-white" />
             
            </div>
            <div>
            <h3 className="text-2xl font-bold py-4">Support 24/24</h3>
              <p className="leading-12">
                We use an application designed a testing gnose to keep away
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
