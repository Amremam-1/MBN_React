import React from "react"

const Toast = () => {
  return (
    <div
      id="toast-simple"
      className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 
      rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800
      
      "
      role="alert"
    >
      <svg
        className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
        />
      </svg>
      <div className="ps-4 text-sm font-normal">Message sent successfully.</div>
    </div>
  )
}

export default Toast
