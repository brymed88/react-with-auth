import React from "react";

const Head = () => {

    const base_url = document.location.origin

    // Declare a new state variable for button toggle and toggle className;
    const [btnTog, setBtnTog] = React.useState(false);

    const menuToggle = () => {
        btnTog === false ? setBtnTog(true) : setBtnTog(false)
    }

    return (

            <section className={(btnTog === true ? 'o_show' : 'o_hide') + ' header'}>

                <div className="topcontainer">
                    <a href="/" className="brand"><img src={base_url + '/logo.svg'} alt="" /></a>
                    <div id="myLinks" className={(btnTog === true ? 'visible' : '') + ' menu'}>
                        
                        <a href={base_url + '/'}>About</a>
                        <a href={base_url + '/'}>Contact</a>
                        <a href="/login">Login / Signup</a>
                        <hr className="cust_hr" />
                        <a href={'/privacy'}>Privacy Policy</a>
                        <a href={'/terms'}>Terms & Conditions</a>
                    
                    </div>
                    
                    <button onClick={menuToggle} className={(btnTog === true ? 'rot' : '') + ' icon'}>+</button>
                </div>
            
            </section>

    );
};

export default Head;