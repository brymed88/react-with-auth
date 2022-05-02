import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteLocalAuth } from '../../../utils/LocalAuthUtil';

import './Header.min.css';
import Logo from '../../../assets/common/logo.svg';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const Logout = () => {
    DeleteLocalAuth();
    navigate('/');
  };

  const menuToggle = () => {
    toggle === false ? setToggle(true) : setToggle(false);
  };

  return (
    <aside className='dash-sidebar'>
      <header>
        <Link to='/dashboard' className='brand'>
          <img src={Logo} />
        </Link>
        <span
          onClick={menuToggle}
          className={(toggle === true ? 'tog-rotate' : '') + ' tog-btn'}>
          +
        </span>
      </header>

      <section
        className={(toggle === true ? 'menu-show' : 'menu-hide') + ' sub-menu'}>
        <nav>
          <ul>
            <li>
              <Link to='/dashboard'>Overview</Link>
            </li>
            <li>
              <Link to='/dashboard'>Example</Link>
            </li>
            <li>
              <Link to='/dashboard'>Example</Link>
            </li>
            <li>
              <Link to='/dashboard'>Example</Link>
            </li>
            <li>
              <Link to='/dashboard'>Example</Link>
            </li>

            <h3>Account Links</h3>

            <li>
              <Link to='/dashboard/account'>Account</Link>
            </li>
            <li>
              <Link to='/dashboard'>Example</Link>
            </li>
            <li>
              <Link to='/dashboard'>Example</Link>
            </li>
          </ul>
        </nav>

        <input type='button' value='Log Out' onClick={Logout} />

        <footer className='copyright'>
          &copy; 2022 |
          <a href='https://treantlabs.com' target='_blank' rel='norefferer'>
            {' '}
            Treantlabs.com
          </a>
          <section className='social'>F,T,GIT</section>
        </footer>
      </section>
    </aside>
  );
};

export default Header;
