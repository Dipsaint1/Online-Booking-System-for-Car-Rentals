import { NavLink } from 'react-router-dom';
import '../sass/navbar.scss';
import { useState } from 'react';

const Navbar = () => {

  const [hideMenu, setHideMenu] = useState<boolean>(true);

  return (
    <nav className='navbar' id='navbar'>
      <div className="container">
        <div className="navbar-brand-wrapper">
          <NavLink className='navbar-brand' to='/'> Car<span>Rental</span></NavLink>
        </div>
        <button onClick={() => setHideMenu(!hideMenu)} className="nav-toggler" type="button" aria-label='Toggle navbar'>
          <i className={`fa-solid fa-${ hideMenu ? 'bars' : 'times' }`} /> {hideMenu ? 'Menu' : 'close'}
        </button>

        <ul className={`my-auto ${hideMenu && 'hide'}`}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Pricing</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Cars</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;