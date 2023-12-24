import React,{useState} from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  
  const [userL,setUser] = useState(JSON.parse(localStorage.getItem("user")))
  
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          <div className="text-white uppercase font-semibold">Bienvenido: {userL.firstName} {userL.lastName}</div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
