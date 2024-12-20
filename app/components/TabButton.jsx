import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active 
    ? 'text-white border-b bolder border-fuchsia-700'
    : 'text-gray-400'

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonClasses} hover:text-white`}>
        {children}
      </p>
    </button>
  )
}

export default TabButton