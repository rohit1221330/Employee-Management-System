// components/Header.jsx
import React from 'react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

const Header = (props) => { // Props ko wapas original tarike se le rahe hain

  const logOutUser = () => {
    // Local storage se user data ko हटा दें
    localStorage.removeItem('loggedInUser');

    // Aapke original function props.changeUser ko call kiya ja raha hai
    props.changeUser('');

    // window.location.reload() abhi bhi hata hua hai (jaisa aap chahte the)
  };

  return (
    <header className='flex items-center justify-between p-4 px-4 bg-white shadow-sm sm:px-6 lg:px-8 dark:bg-gray-800'>
      
      {/* Left Side: App Name & Welcome Message */}
      <div className='flex items-center gap-4'>
        <div className='text-xl font-bold text-emerald-600 font-poppins'>
          LOGO
        </div>
        <div className='hidden sm:block'>
          <h1 className='text-base font-normal text-gray-600 dark:text-gray-400'>
            Hello,
          </h1>
          {/* 'user' ki jagah wapas 'props.data' ka istemaal kiya gaya hai */}
          <p className='text-xl font-semibold text-gray-900 dark:text-white'>
            {props.data ? props.data.firstname : 'Admin'} 👋
          </p>
        </div>
      </div>
      
      {/* Right Side: Logout Button */}
      <button 
        onClick={logOutUser} // onClick ab aapke logOutUser function ko call kar raha hai
        className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 transition-colors duration-200 bg-red-100 rounded-lg hover:bg-red-200 dark:text-red-300 dark:bg-red-900/50 dark:hover:bg-red-900'
        aria-label="Logout"
      >
        <ArrowRightOnRectangleIcon className="w-5 h-5" />
        <span className='hidden md:inline'>Logout</span>
      </button>

    </header>
  );
}

export default Header;