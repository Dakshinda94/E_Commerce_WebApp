import { faArrowRightToBracket, faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../styles/navbar.css'



const Navbar = () => {
    return (
        <div className="n-container">
            <div className="n-row">
                <div className="n-col">
                    <span className='n-email'>dakshinda.r94@gmail.com</span>
                </div>
                <div className="n-col">
                    <div className="socials">
                        <a href="/"><img src="/images/socials/facebook.png" alt="" /></a>
                        <a href="/"><img src="/images/socials/instagram.png" alt="" /></a>
                        <a href="/"><img src="/images/socials/twitter.png" alt="" /></a>
                        <a href="/"><img src="/images/socials/youtube.png" alt="" /></a>                  
                    </div>
                </div>
            </div>
            <div className="n-row">
                <div className="n-col">
                    <a href="/"><img src="/images/logo/logo.png" className="logo" alt=""/></a>
                </div>
                <div className="n-col">
                    <div className="icons">
                        <a href="/"><span><FontAwesomeIcon icon={faArrowRightToBracket} /> Login</span></a>
                        <a href="/"><span><FontAwesomeIcon icon={faHeart} /><span className="totalitems">0</span></span></a>
                        <a href="/"><span><FontAwesomeIcon icon={faShoppingBag} /><span className="totalitems">0</span></span></a>
                    </div>
                </div>
            </div>
            <div className="n-row">
                <nav className="nav">
                    <ul className="items">
                        <li className="list"><a href="/">Home</a></li>
                        <li className="list"><a href="/">Shop</a></li>
                        <li className="list"><a href="/">About</a></li>
                        <li className="list"><a href="/">Contact</a></li>
                    </ul>
                    <button className="btn">BTN</button>
                </nav>
            </div>

        </div>
    )
    }

    export default Navbar