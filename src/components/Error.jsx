import React from "react";
import { Link } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { HiOutlineArrowNarrowLeft, HiOutlineHome } from "react-icons/hi";

const ModernError = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 overflow-hidden">
      <div className="text-center max-w-lg">
        {/* Icon with Bounce Animation */}
        <div className="animate__animated animate__bounceInDown inline-block mb-6">
          <BiErrorCircle className="text-8xl text-orange-500 drop-shadow-xl" />
        </div>

        {/* Text with FadeInUp Animation */}
        <h1 className="animate__animated animate__fadeInUp animate__fast text-8xl font-black text-purple-900 mb-2">
          404
        </h1>

        <h2 className="animate__animated animate__fadeInUp animate__delay-1s text-2xl font-bold text-gray-800 mb-4">
          Lost in the Discount Jungle?
        </h2>

        <p className="animate__animated animate__fadeInUp animate__delay-1s text-gray-500 mb-8 leading-relaxed">
          We couldn't find the page you're looking for. But don't let that stop
          your savings! Try heading back to our main dashboard.
        </p>

        {/* Buttons with Pulse effect on the main one */}
        <div className="animate__animated animate__fadeInUp animate__delay-2s flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="animate__animated animate__pulse animate__infinite flex items-center gap-2 px-8 py-3 bg-purple-700 text-white rounded-full font-semibold hover:bg-purple-800 transition-colors shadow-lg shadow-purple-200"
          >
            <HiOutlineHome size={20} />
            Take Me Home
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 px-8 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            <HiOutlineArrowNarrowLeft size={20} />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModernError;
