import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import './Header.min.css';

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const logout = () => {
        /*
        * call api to process logout and destruction of JWT, Local storage token 
        */
    }

    const menuToggle = () => {
        (toggle === false ? setToggle(true) : setToggle(false))
    }

    return (
        <aside className="dash-sidebar">

            <header>
                <h2>{process.env.REACT_APP_SITE_NAME}</h2>
                <span onClick={menuToggle} className={(toggle === true ? 'tog-rotate' : '') + ' tog-btn'}>
                    +
                </span>
            </header>

            <section className={(toggle === true ? 'menu-show' : 'menu-hide') + ' sub-menu'}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>

                    </ul>
                </nav>

                <section className="account">

                    <h3>Account Links</h3>
                    <ul>
                        <li>
                            <Link to="/dashboard">Account</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Example</Link>
                        </li>
                    </ul>
                    <input type="button" value="Log Out" onClick={logout} />

                </section>

                <footer className="copyright">

                    &copy; <a href="https://treantlabs.com">Treantlabs.com</a>

                    <section className="social">
                        F,T,GIT
                    </section>

                </footer>
            </section>

        </aside>
    )
}

export default Header;