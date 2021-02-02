import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss"
const footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <img src={require("../../assests/images/2.jpg")} alt="footer-logo"/>
            </div>
            <hr />
            <div className="footer-cotent">
                <div className="copy-right">&copy; Copyright SportsLive 2020 reserved</div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <Link to="#">Career</Link>
                        </li>
                        <li>
                            <Link to="#">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="#">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="#">Terms and conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}



export default footer;      