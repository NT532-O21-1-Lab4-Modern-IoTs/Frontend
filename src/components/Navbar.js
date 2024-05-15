import React from 'react';
import Main from '../pages/Main';
import Table from '../pages/Table';
function Navbar() {
  return (
    // <nav className="bg-white h-full w-20 flex flex-col justify-between">
    //   <div className="pt-4 pb-8 px-2">
    //     <h1 className="text-xl font-bold text-center">Lab 4</h1>
    //   </div>
    //   <div className="flex flex-col items-center">
    //     <a href="#" className="py-4 px-2 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out">
    //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 11a9 9 0 0 1 9-9m-9 9a9 9 0 0 0 9 9m-9-9v4a1 1 0 0 0 1 1h4M5 15l2-2m14 2l-2-2m0 0a9 9 0 0 0-9-9v4a1 1 0 0 0 1 1h4a9 9 0 0 1 4.898 1.448M5 9l2 2m0 0a9 9 0 0 0 9 9v-4a1 1 0 0 0-1-1h-4"/>
    //       </svg>
    //     </a>
    //     <a href="#" className="py-4 px-2 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out">
    //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
    //       </svg>
    //     </a>
    //   </div>
    // </nav>
    <nav className="bg-white h-full w-20 flex flex-col justify-between">
      <div className="pt-4 pb-8 px-2">
        <h1 className="text-xl font-bold text-center">Lab 4</h1>
      </div>
      <div className="flex flex-col items-center">
        <a href="/" className="py-4 px-2 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 11a9 9 0 0 1 9-9m-9 9a9 9 0 0 0 9 9m-9-9v4a1 1 0 0 0 1 1h4M5 15l2-2m14 2l-2-2m0 0a9 9 0 0 0-9-9v4a1 1 0 0 0 1 1h4a9 9 0 0 1 4.898 1.448M5 9l2 2m0 0a9 9 0 0 0 9 9v-4a1 1 0 0 0-1-1h-4"/>
          </svg>
        </a>
        <a href="/table" className="py-4 px-2 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
          </svg>
        </a>
        <a href="/control" className="py-4 px-2 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 11a9 9 0 0 1 9-9m-9 9a9 9 0 0 0 9 9m-9-9v4a1 1 0 0 0 1 1h4M5 15l2-2m14 2l-2-2m0 0a9"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
