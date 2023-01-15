import React from "react";

const Navigation = () => {
    
  return(
    <div className="flex space-x-12 items-center mx-44 pt-11">
        <a className = "text-xl font-semibold text-gray-500 hover:text-gray-400">
            Home
        </a>
        <a className = "text-xl font-semibold text-gray-500 hover:text-gray-400">
            About
        </a>

    </div>
  );
};

export default Navigation;