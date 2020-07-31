import React from 'react';
const Footer = () => {

    return (
        <div className="footer-copyright text-center py-3 bg-info text-lighter">© {new Date().getFullYear()} Copyright:
             Made with ❤,React & Node by <a href="https://haribhandari.me" className="text-lighter"> Hari Bhandari</a>
        </div>

    );
};


export default Footer;