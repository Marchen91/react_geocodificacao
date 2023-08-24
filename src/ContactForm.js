import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    message: ''
  });

  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (window.confirm('Tem certeza que deseja enviar a mensagem?')) {
      const newMessage = { ...formData };
      setMessages([...messages, newMessage]);
      setSubmittedMessage(newMessage);
      setFormData({
        name: '',
        city: '',
        message: ''
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            {/* Campos do formulário */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nome:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">Cidade:</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="Digite sua cidade"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensagem:</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Digite sua mensagem"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success rounded-pill">Enviar</button>
          </form>

          {submittedMessage && (
            <div className="mt-3">
              <p>{submittedMessage.name} - {submittedMessage.city}</p>
              <p>{submittedMessage.message}</p>
            </div>
          )}
          {messages.length > 0 && (
            <div className="mt-3">
              <h5>Mensagens anteriores:</h5>
              {messages.map((message, index) => (
                <div key={index}>
                  <p>{message.name} - {message.city}</p>
                  <p>{message.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
