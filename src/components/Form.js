import React from "react";

export default function Form() {
  return (
    <form className="bg-dark-violet rounded-md flex flex-col w-11/12 mx-auto p-6 justify-center items-center absolute -top-20 left-1/2 -translate-x-1/2 md:flex-row md:w-3/4 md:gap-6 md:p-12 md:rounded-lg">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="rounded-md mb-4 py-3 w-full pl-4 md:mb-0 md:py-4 md:text-lg md:rounded-lg"
      />
      <button
        type="submit"
        className="w-full bg-primary-cyan text-white font-bold py-3 rounded-md md:w-56 md:py-4 md:text-lg md:rounded-lg md:px-4"
      >
        Shorten It!
      </button>
    </form>
  );
}
