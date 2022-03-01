import React from "react";
import { Link } from 'react-router-dom';

const Head = () => {

    // Declare a new state variable for button toggle and toggle className;
    const [btnTog, setBtnTog] = React.useState(false);

    const menuToggle = () => {
        btnTog === false ? setBtnTog(true) : setBtnTog(false)
    }

    //Array of link objects to display in top menu
    const pageLinks = [
        { location: "/", displayText: "Home" },
        { location: "/about", displayText: "About" },
        { location: "/contact", displayText: "Contact" },
        { location: "/login", displayText: "Login / Signup" }
    ];

    return (

        <section className={(btnTog === true ? 'o_show' : 'o_hide') + ' header'}>

            <div className="topcontainer">
                <Link to='/' className="brand"><img src='/logo.svg' alt="" /></Link>
                <div id="myLinks" className={(btnTog === true ? 'visible' : '') + ' menu'}>

                    {
                        //Map through pageLinks and build the link tree
                        pageLinks.map(link =>
                            <Link to={link.location} key={link.displayText} onClick={menuToggle}>{link.displayText}</Link>
                        )
                    }

                </div>
                <button onClick={menuToggle} className={(btnTog === true ? 'rot' : '') + ' icon'}>+</button>
            </div>

        </section>
    );
};

export default Head;