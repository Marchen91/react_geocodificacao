import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios: npm install axios
import backgroundImage from './pngtree-hour-countdown-earth-surrounded-by-stacks-of-boxes-and-a-ticking-image_3638835.png';
import './App.css';
import Navbar from "./Navbar";
const Imagens = ({ locationName }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [showForm, setShowForm] = useState(true); 
  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }

    // Replace 'YOUR_UNSPLASH_API_KEY' with your actual Unsplash API key
    const API_KEY = 'IMs5sLJt6aSTzqBFP6ip0x7yfUDTyud3E2DejoDyflg';
    const API_URL = `https://api.unsplash.com/search/photos/?query=${searchQuery}&client_id=${API_KEY}`;

    axios.get(API_URL)
      .then(response => {
        setImages(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, [searchQuery]);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', // Tamanho da imagem
    backgroundPosition: 'center', // Posição da imagem
    backgroundRepeat: 'no-repeat', // Não repetir a imagem
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', }}>
        <Navbar setShowForm={setShowForm} /> {/* Passa a prop setShowForm */}
    <div
    style={{
      backgroundColor: 'rgba(255, 255, 255, 1)', // Fundo mais transparente (branco)
      padding: '50px', // Espaçamento interno
      borderRadius: '10px', // Cantos arredondados
      width: '50%', // Largura do conteúdo
      maxWidth: '500px', // Largura máxima
      textAlign: 'top', // Centraliza o conteúdo
    }}
  >
    <div style={{alignItems: 'center'}} >
      <h1>Imagens do Local: {locationName}</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search images..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="image-gallery" style={{alignItems: 'center'}}>
        {images.map(image => (
          <div key={image.id} className="image-card" style={{alignItems: 'left'}} >
            <img src={image.urls.regular} alt={image.alt_description} />
            <p>{image.alt_description}</p>
          </div>
        ))}
      </div>
      <div className="footer"> {}
    <p>
     E-mail: <a href="mailto:contato@seusite.com">contato@seusite.com - </a>
    Telefone: <a href="tel:(123)456-7890">(123) 456-7890</a>
  </p></div>
    </div>
    </div>
    </div>
  );
};

export default Imagens;