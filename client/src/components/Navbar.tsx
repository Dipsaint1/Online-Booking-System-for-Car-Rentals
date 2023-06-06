import { NavLink } from 'react-router-dom';
import '../sass/navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar' id='navbar'>
      <div className="container">
        <div className="navbar-brand-wrapper">
          <NavLink className='navbar-brand' to='/'> Car<span>Rental</span></NavLink>
        </div>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#ftco-nav' aria-controls='ftco-nav' aria-expanded='false' aria-label='Toggle navbar'> */}
        <button className="navbar-toggler" type="button" aria-label='Toggle navbar'>
          <i className="fa-solid fa-bars" /> MENU
        </button>

        <ul className="my-auto">
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