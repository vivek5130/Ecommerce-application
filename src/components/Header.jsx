import React from 'react'
import '../index.css'
const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      {/* TODO ADD LINKS  FOR EACH PAGE*/}
      <span className = "">Logo</span>
      <span className = "">Home</span>
      <span className = "">About</span>
      <span className = "">Cart</span>
    </div>
  )
}

export default Header 