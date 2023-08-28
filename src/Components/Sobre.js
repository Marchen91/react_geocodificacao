import React, { useState } from 'react';
import backgroundImage from './pngtree-hour-countdown-earth-surrounded-by-stacks-of-boxes-and-a-ticking-image_3638835.png';
import './App.css';
import Navbar from "./Navbar";

function Sobre() {
    const [showForm, setShowForm] = useState(true); // Estado para controlar a exibição do formulário
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
      <h1>Sobre o Projeto</h1>
 <p     style={{ fontSize: '25px' }}>
Trabalho de Front-End</p>
<p     style={{ fontSize: '21px' }}>
Alunos: </p>
<p     style={{ fontSize: '21px' }}>
Francis Guedes</p>
<p     style={{ fontSize: '21px' }}>
Marcelo Braga</p>
<p>
  Através desta aplicação, é possível aprender sobre geolocalização, APIs de mapas e como obter informações úteis com base nas coordenadas geográficas. Além disso, você pode experimentar a funcionalidade de obter o horário local de uma determinada cidade.
</p>
<p>
  Sinta-se à vontade para explorar a aplicação, experimentar diferentes coordenadas e aprender mais sobre geocodificação reversa. Se tiver alguma dúvida ou feedback, não hesite em entrar em contato!
</p>

    </div>
    <div className="footer"> {}
    <p>
     E-mail: <a href="mailto:contato@seusite.com">contato@seusite.com - </a>
    Telefone: <a href="tel:(123)456-7890">(123) 456-7890</a>
  </p></div>
    </div>
  );
}

export default Sobre;
