
import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TiThMenuOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import '../Styles/main.css';

function Navbar({ setShowForm }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const handleSobreClick = () => {
    setShowForm(false); 
    showNavbar();
  };

  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
      <TiThMenuOutline />
      <nav ref={navRef}>
        <Link to="/" >Inicio</Link> {/* Link para a página inicial */}

		<Link to="/imagens">Imagens</Link>
        <Link to="/sobre" onClick={handleSobreClick}>Sobre</Link> {/* Use o componente Link e o manipulador handleSobreClick */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
