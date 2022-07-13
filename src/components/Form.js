import React, { useState } from "react";

export default function Form(props) {
  const [value, setValue] = useState("");

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      document.getElementsByTagName("input")[0].style.border = "2px solid red";
      document.querySelector(".error").classList.remove("hidden");
      return;
    }
    props.linkHandler(value);
    setValue("");
    document.getElementsByTagName("input")[0].style.border = "none";
    document.querySelector(".error").classList.add("hidden");
  };

  return (
    <form
      className="bg-dark-violet rounded-md flex flex-col w-11/12 mx-auto p-6 justify-center items-center absolute -top-20 left-1/2 -translate-x-1/2 md:flex-row md:w-3/4 md:gap-6 md:p-12 md:rounded-lg"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="rounded-md mb-4 py-3 w-full pl-4 md:mb-0 md:py-4 md:text-lg md:rounded-lg"
        value={value}
        onChange={valueHandler}
      />
      <p className="error md:absolute md:bottom-6 md:left-14 text-sm text-red-400 mb-4 italic -mt-3 self-start hidden z-50 md:m-0 md:self-end">
        please add a link
      </p>
      <button
        type="submit"
        className="w-full bg-primary-cyan text-white font-bold py-3 rounded-md md:w-56 md:py-4 md:text-lg md:rounded-lg md:px-4"
      >
        Shorten It!
      </button>
    </form>
  );
}
