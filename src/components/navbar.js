import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-desktop">
        <div className="navbar-main">
          {/* <div className="navbar-branding">
            <Link to="/" className="navbar-navlink">
              <img
                alt={props.Branding_alt}
                // src={props.Branding_src}
                src={require('../ressources/images/dvd_dataset_logo3.png')}
                className="navbar-finbest"
              />
            </Link>
          </div> */}
          <div className="navbar-links">
          {/* <Link to="/" className="link">
              {props.Link_0}
            </Link> */}
            {/* <Link to="/" className="link">
              {props.Link_1}
            </Link>
            <Link to="/" className="link">
              {props.Link_2}
            </Link>
            <Link to="/" className="link">
              {props.Link_4}
            </Link> */}
          </div>
        </div>
        <div className="navbar-quick-actions">
          {/* <Link to="" className="navbar-navlink1">
            <div className="navbar-sign-up-btn">
              <span className="navbar-sign-up">
                <span className="">Download</span>
                <br className=""></br>
              </span>
            </div>
          </Link> */}
          <a href="https://drive.google.com/drive/folders/1X7M2EpYpBMA09j-TF8S5mrwTNBGnKhFd?usp=share_link" target="_blank" rel="noopener noreferrer" className="navbar-navlink1">
            <div className="navbar-sign-up-btn">
              <span className="navbar-sign-up">
                <span className="">Download</span>
                <br className=""></br>
              </span>
            </div>
          </a>
          <img
            id="open-mobile-menu"
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="navbar-hamburger-menu"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile">
        <div className="navbar-top">
          {/* <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image"
          /> */}
          <svg
            id="close-mobile-menu"
            viewBox="0 0 1024 1024"
            className="navbar-icon"
          >
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="navbar-links1">
          {/* <Link to="/" className="navbar-navlink2">
            {props.text1}
          </Link> */}
          {/* <Link to="/" className="navbar-navlink3">
            {props.text11}
          </Link>
          <Link to="/" className="navbar-navlink4">
            {props.text12}
          </Link>
          <Link to="/" className="navbar-navlink5">
            {props.text13}
          </Link> */}
          <div className="navbar-buttons">
            {/* <Link to="/" className="navbar-navlink6">
              <div className="navbar-btn">
                <span className="navbar-text2">{props.text131}</span>
              </div>
            </Link>
            <Link to="/" className="navbar-navlink7">
              <div className="navbar-btn">
                <span className="navbar-text3">{props.text1311}</span>
              </div>
            </Link> */}

            <a href="https://drive.google.com/drive/folders/1X7M2EpYpBMA09j-TF8S5mrwTNBGnKhFd?usp=share_link" target="_blank" rel="noopener noreferrer" className="navbar-navlink1">
             <div className="navbar-btn">
                <span className="navbar-text3">{props.dataset}</span>
              </div>
            </a>

            <a href="/pdfs/main_paper.pdf" target="_blank" rel="noopener noreferrer" className="navbar-navlink1">
             <div className="navbar-btn">
                <span className="navbar-text3">{props.paper}</span>
              </div>
            </a>

            <a href="https://github.com/DVD-dataset/dvdv1-code" target="_blank" rel="noopener noreferrer" className="navbar-navlink1">
             <div className="navbar-btn">
                <span className="navbar-text3">{props.code}</span>
              </div>
            </a>

            <a href="/pdfs/dual_view_drone_dataset_can_mu-Supplementary.pdf" target="_blank" rel="noopener noreferrer" className="navbar-navlink1">
             <div className="navbar-btn">
                <span className="navbar-text3">{props.supplementary}</span>
              </div>
            </a>

          </div>
        </div>
      </div>
      <div className="">
        <div className="navbar-container1">
          <Script
            html={` <script>
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu");

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu");
    const openButton = document.querySelector("#open-mobile-menu");

    if (mobileMenu && closeButton && openButton) {
      // On openButton click, set the mobileMenu position left to -100vw
      openButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(0%)";
      });

      // On closeButton click, set the mobileMenu position to 0vw
      closeButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(100%)";
      });
    }
  </script>`}
            className=""
          ></Script>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  Link_3: 'Prices',
  text1: 'Home',
  text12: 'Prices',
  Link_4: 'Contact\n',
  Branding_src: '/pastedimage-cx4wqj.svg',
  rootClassName: '',
  Link_0: 'Home',
  Link_1: 'Benchmarks',
  text131: 'Dataset',
  image_alt: 'image',
  pastedImage_src: '/pastedimage-8o98.svg',
  text1311: 'Tiny Dataset',
  text13: 'Contact',
  Link_2: 'Statistics',
  pastedImage_alt: 'pastedImage',
  image_src: '',
  Branding_alt: 'pastedImage',
  text11: 'How it works',
  dataset: 'Dataset',
  paper: 'Paper',
  code: 'Code',
  supplementary: 'Supplementary',
  
}

Navbar.propTypes = {
  Link_3: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  Link_4: PropTypes.string,
  Branding_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Link_1: PropTypes.string,
  text131: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  Link_2: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
  Branding_alt: PropTypes.string,
  text11: PropTypes.string,
}

export default Navbar
