import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import './Header.min.css';
import Logo from '../../../assets/common/logo.svg';
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
            <Link to='/dashboard' className="brand"><img src={Logo} /></Link>
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



                    <h3>Account Links</h3>
                        
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

                    <input type="button" value="Log Out" onClick={logout} />

                <footer className="copyright">

                &copy; 2022 |<a href="https://treantlabs.com" target="_blank" rel="norefferer"> Treantlabs.com</a>

                    <section className="social">
                        F,T,GIT
                    </section>

                </footer>
            </section>

        </aside>
    )
}

export default Header;