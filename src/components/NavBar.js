import { GiHamburgerMenu } from "react-icons/gi";
export default function NavBar() {
  const menuHandler = () => {
    document.querySelector(".links").classList.toggle("flex");
    document.querySelector(".links").classList.toggle("hidden");
    document.querySelector(".links").classList.add("active");
  };

  return (
    <header className="pt-10 mb-8 md:pt-2">
      <nav className="navbar flex relative justify-between w-11/12 mx-auto flex-col gap-6 md:flex-row md:items-center md:justify-start md:w-3/4 md:gap-10">
        <div className="logo mx-2 md:mx-0">
          <img src="/images/logo.svg" alt="" />
        </div>
        <GiHamburgerMenu
          className="absolute right-2 text-3xl text-grayish-violet md:hidden cursor-pointer"
          onClick={menuHandler}
        />
        <ul className="links flex-col items-center justify-center bg-dark-violet rounded-lg text-white py-10 text-lg font-black gap-7 left-1/2 -translate-x-1/2 absolute w-[95%] top-14 none md:static md:bg-transparent md:text-grayish-violet md:w-full md:flex-row md:translate-x-0 md:justify-start md:text-sm hidden md:flex">
          <li className="hover:text-darker-blue">
            <button>Features</button>
          </li>
          <li className="hover:text-darker-blue">
            <button>Pricing</button>
          </li>
          <li className="hover:text-darker-blue">
            <button>Resources</button>
          </li>
          <li className="w-10/12 h-[1px] bg-grayish-violet md:hidden"></li>
          <li className="md:ml-auto hover:text-darker-blue">
            <button>Login</button>
          </li>
          <li className="bg-primary-cyan w-10/12 text-center py-2 rounded-3xl md:w-24 md:text-white hover:bg-primary-cyan hover:opacity-70">
            <button>Sign Up</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
