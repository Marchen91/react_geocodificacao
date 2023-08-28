import React, { useState } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
=======
>>>>>>> 2c23cc46c8e63212aaa9a0d181d6ad41c362530b
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import backgroundImage from './pngtree-hour-countdown-earth-surrounded-by-stacks-of-boxes-and-a-ticking-image_3638835.png';
import backgroundImage2 from './pngwing.com.png';
<<<<<<< HEAD
import Sobre from "./Components/Sobre"
import Imagens from "./Components/Imagens"


function Home() {
=======


function App() {
>>>>>>> 2c23cc46c8e63212aaa9a0d181d6ad41c362530b
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [localTime, setLocalTime] = useState('');
<<<<<<< HEAD
  const [showForm, setShowForm] = useState(true); 

=======
>>>>>>> 2c23cc46c8e63212aaa9a0d181d6ad41c362530b


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
<<<<<<< HEAD
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=CODIGO_API_GOOGLE`);
=======
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=CODIGO_API_GOOGLE`);
>>>>>>> 2c23cc46c8e63212aaa9a0d181d6ad41c362530b
      const data = await response.json();

      if (data.results.length > 0) {
        setCity(data.results[0].formatted_address);

<<<<<<< HEAD
        const timeZone = data.results[0].geometry.time_zone;

        const timeZoneResponse = await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=${Date.now() / 1000}&key=CODIGO_API_GOOGLE`);
=======
        // Obtenha o fuso horário a partir dos resultados da geocodificação
        const timeZone = data.results[0].geometry.time_zone;

        // Agora você pode usar o timeZone para obter o horário da cidade correspondente
        const timeZoneResponse = await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=${Date.now() / 1000}&key=CODIGO_API_GOOGLE`);
>>>>>>> 2c23cc46c8e63212aaa9a0d181d6ad41c362530b
        const timeZoneData = await timeZoneResponse.json();

        if (timeZoneData.timeZoneId) {
          const time = new Date().toLocaleTimeString('pt-BR', { timeZone: timeZoneData.timeZoneId });
          setLocalTime(time);
        } else {
          setLocalTime('Horário não encontrado');
        }
      } else {
        setCity('Cidade não encontrada');
      }
    } catch (error) {
      console.error('Erro ao buscar cidade:', error);
      setCity('Erro ao buscar cidade');
    }
  };
  const fetchTimezone = async (lat, lng) => {
    try {
<<<<<<< HEAD
      const timezoneResponse = await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${Date.now() / 1000}&key=CODIGO_API_GOOGLE`);
=======
      const timezoneResponse = await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${Date.now() / 1000}&key=CODIGO_API_GOOGLE`);
>>>>>>> 2c23cc46c8e63212aaa9a0d181d6ad41c362530b
      const timezoneData = await timezoneResponse.json();

      if (timezoneData.timeZoneId) {
        setLocalTime(new Date().toLocaleTimeString('en-US', { timeZone: timezoneData.timeZoneId }));
      } else {
        setLocalTime('Horário não disponível');
      }
    } catch (error) {
      console.error('Erro ao buscar fuso horário:', error);
      setLocalTime('Erro ao buscar fuso horário');
    }
  };

  return (
<<<<<<< HEAD

    <div className="App" style={{
      backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}><Navbar setShowForm={setShowForm} /> {}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)', 
          padding: '20px', 
          borderRadius: '10px', 
          width: '50%', 
          maxWidth: '500px', 
          textAlign: 'center', 
        }}
      >
        <h1>Geocodificação Reversa</h1>
      
      {showForm && (<div>

        {
          <form className="white-background-form" onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="latitude" className="form-label">Latitude:</label>
              <input type="text" placeholder="Digite a Latitude" className="form-control" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="longitude" className="form-label">Longitude:</label>
              <input type="text" placeholder="Digite a Longitude" className="form-control" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
            </div>
            <button
              type="submit"
              className="btn btn-success border border-dark"
              style={{
                backgroundColor: '#669999',
                borderColor: 'darkgreen',
                borderWidth: '20px',
                borderRadius: '30px',
                color: 'white',
                padding: '10px 20px 10px 40px', 
                cursor: 'pointer',
                backgroundImage: `url(${backgroundImage2})`, 
                backgroundSize: 'contain', 
                backgroundPosition: 'left', 
                backgroundRepeat: 'no-repeat', 
                transition: 'background-color 0.3s, box-shadow 0.3s', 
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(76, 175, 80, 0.8)'; 
                e.target.style.boxShadow = '0px 2px 4px 0px rgba(0, 0, 0, 0.2)'; 
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#669999'; 
                e.target.style.boxShadow = 'none'; 
              }}
            >
              Buscar Local
            </button>
          </form>}</div>)}

      {!showForm && (
        <div style={{ marginTop: '10px', border: '10px solid #ccc', padding: '10px' }}>
          <h2>Local encontrado:</h2>
          <p>{city}</p>
          <h2>Horário local:</h2>
          <p>{localTime}</p>
        </div>
      )}
=======
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', // Tamanho da imagem
    backgroundPosition: 'center', // Posição da imagem
    backgroundRepeat: 'no-repeat', // Não repetir a imagem
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', }}>

<div
    style={{
      backgroundColor: 'rgba(255, 255, 255, 1)', // Fundo mais transparente (branco)
      padding: '20px', // Espaçamento interno
      borderRadius: '10px', // Cantos arredondados
      width: '50%', // Largura do conteúdo
      maxWidth: '500px', // Largura máxima
      textAlign: 'center', // Centraliza o conteúdo
    }}
  >

      

      <h1 className="my-4">Geocodificação Reversa</h1>
      <form className="white-background-form" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="latitude" className="form-label">Latitude:</label>
          <input type="text" className="form-control" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="longitude" className="form-label">Longitude:</label>
          <input type="text" className="form-control" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
        </div>
        <button
          type="submit"
          className="btn btn-success border border-dark"
          style={{
            backgroundColor: '#669999',
            borderColor: 'darkgreen',
            borderWidth: '20px',
            borderRadius:'30px',
            color: 'white',
            padding: '10px 20px 10px 40px', // Ajusta o espaçamento na direita (40px)
            cursor: 'pointer',
            backgroundImage: `url(${backgroundImage2})`, // Adicione a imagem como plano de fundo
            backgroundSize: 'contain', // Ajusta o tamanho da imagem para que ela caiba no botão
            backgroundPosition: 'left', // Centraliza a imagem no botão
            backgroundRepeat: 'no-repeat', // Evita repetição da imagem
            transition: 'background-color 0.3s, box-shadow 0.3s', // Transições suaves
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(76, 175, 80, 0.8)'; // Cor de fundo mais escura com transparência
            e.target.style.boxShadow = '0px 2px 4px 0px rgba(0, 0, 0, 0.2)'; // Adiciona uma sombra
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#669999'; // Retorna à cor de fundo original
            e.target.style.boxShadow = 'none'; // Remove a sombra
          }}
        >
          Buscar Local
        </button> </form>
>>>>>>> 2c23cc46c8e63212aaa9a0d181d6ad41c362530b
      <div style={{ marginTop: '10px', border: '10px solid #ccc', padding: '10px' }}>
        <h2>Local encontrado:</h2>
        <p>{city}</p>
        <h2>Horário local:</h2>
        <p>{localTime}</p>
      </div>
<<<<<<< HEAD

    </div>
    <div className="footer"> {}
    <p>
     E-mail: <a href="mailto:contato@seusite.com">contato@seusite.com - </a>
    Telefone: <a href="tel:(123)456-7890">(123) 456-7890</a>
  </p></div>
    </div>

  );
}



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imagens" element={<Imagens/>} />
        <Route path="/sobre" element={<Imagens />} />
        {}
      </Routes>

    </Router>

=======
      </div>
    </div>
>>>>>>> 2c23cc46c8e63212aaa9a0d181d6ad41c362530b
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> 2c23cc46c8e63212aaa9a0d181d6ad41c362530b
