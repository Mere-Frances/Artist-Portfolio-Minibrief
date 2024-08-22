import React from 'react'

const Header = () => {
  return (
    <div className='header-nav-container'>
      <nav className='navbar'>
        <div className='nav-logo-container'>
          <div className='nav-logo-img'/>
          <h5 className='nav-logo-name'>Yayoi Kusama</h5>
        </div>
        <ul>
          <li>Home</li>
          <li>Biography</li>
          <li>Gallery</li>
        </ul>
      </nav>
      <header>
        <h1 className="header-name">Yayoi Kusama</h1>
      </header>
    </div>
  )
}

export default Header
