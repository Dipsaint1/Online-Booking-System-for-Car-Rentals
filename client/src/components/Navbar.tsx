import { NavLink, Link } from 'react-router-dom';
import '../sass/navbar.scss';
import { useState } from 'react';

const Navbar = () => {

  const [hideMenu, setHideMenu] = useState<boolean>(true);

  return (
    <nav className='navbar' id='navbar'>
      <div className="container">
        <div className="navbar-brand-wrapper">
          <Link className='navbar-brand' to='/'> Car<span>Rental</span></Link>
        </div>
        <button onClick={() => setHideMenu(!hideMenu)} className="nav-toggler" type="button" aria-label='Toggle navbar'>
          <i className={`fa-solid fa-${ hideMenu ? 'bars' : 'times' }`} /> {hideMenu ? 'Menu' : 'close'}
        </button>

        <ul className={`my-auto ${hideMenu && 'hide'}`}>
          <li className="nav-item">
            <NavLink className='nav-link' to="/" style={({isActive, isPending}) => {
              return {
                color: isActive ? 'red' : 'white'
              }
            }} >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/about" style={({isActive, isPending}) => {
              return {
                color: isActive ? 'red' : 'white'
              }
            }} >About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/services" style={({isActive, isPending}) => {
              return {
                color: isActive ? 'red' : 'white'
              }
            }} >Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/pricing" style={({isActive, isPending}) => {
              return {
                color: isActive ? 'red' : 'white'
              }
            }} >Pricing</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/cars" style={({isActive, isPending}) => {
              return {
                color: isActive ? 'red' : 'white'
              }
            }} >Cars</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/blog" style={({isActive, isPending}) => {
              return {
                color: isActive ? 'red' : 'white'
              }
            }} >Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/contract" style={({isActive, isPending}) => {
              return {
                color: isActive ? 'red' : 'white'
              }
            }} >Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;