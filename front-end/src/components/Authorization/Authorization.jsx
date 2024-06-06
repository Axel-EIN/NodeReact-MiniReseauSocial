import { NavLink } from 'react-router-dom';
import './Authorization.css'

const Authorization = () => {
  // const navLinkClassName = ({ isActive }) =>
  //   isActive ? style['active'] : style['nav-link'];

  return (
    <nav className="navigation">
      <NavLink className="navLinkClassName" to="/register">
        Register
      </NavLink>
      <NavLink className="navLinkClassName" to="/log-in">
        Log In
      </NavLink>
    </nav>
  );
};

export default Authorization;