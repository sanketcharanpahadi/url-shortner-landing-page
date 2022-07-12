import React from "react";
// import img from "../../public/images/bg-shorten-mobile.svg";

export default function GetStarted() {
  return (
    <section className="get-started bg-dark-violet py-24 md:py-16">
      <div className="div w-11/12 mx-auto">
        <h2 className="text-center text-white font-bold text-2xl mb-4 md:text-4xl md:mb-6">
          Boost your links today
        </h2>
        <button className="mx-auto block bg-primary-cyan text-white font-black w-48 py-3 rounded-3xl text-xl">
          Get Started
        </button>
      </div>
    </section>
  );
}
