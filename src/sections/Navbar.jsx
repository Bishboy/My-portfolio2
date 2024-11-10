import React, { useState } from 'react'
import { navLinks } from './constant/data'



const NavItems = () => {
  return(
    <ul className='nav-ul'>
      {navLinks.map((items)=> (
        <li key={items.id} className='nav-li'>
          <a href={items.href} className='nav-li_a'>{items.name}</a>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenue = () => {
        setIsOpen((prev) => !prev)
    }

  return (
    <header className='text-white fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space '>
            <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'> Emmanuel</a>
            <button onClick={toggleMenue} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle menu'>
                <img src={ isOpen? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6' />
            </button>
            <nav className='sm:flex hidden'>
              <NavItems />
            </nav>
        </div>
      </div>
      <div className={` nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"} `}>
        <nav className='p-5'>
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
