import { useState } from 'react';

const formStyles = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  maxWidth: '500px',
  margin: '20px auto',
  background: '#f9f9f9',
};

const inputGroupStyles = {
  marginBottom: '15px',
};

const labelStyles = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyles = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box', 
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyles = {
  backgroundColor: '#42b72a',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
};

function Compra({ onConfirm }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => { 
        e.preventDefault(); 

        if (name === '' || email === '') {
            alert('Por favor completa todos los campos.');
            return;
        }

        onConfirm({ name, email });
    };

    return (
        <div style={formStyles}>
            <h2>Datos de la Compra</h2>
            <p> Por favor, ingresa tus datos para finalizar la compra.</p>

            <form onSubmit={handleSubmit}>
              <div style={inputGroupStyles}>
                <label htmlFor="name" style={labelStyles}>Nombre Completo:</label>
                <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyles}
                />
              </div>

              <div style={inputGroupStyles}>
                <label htmlFor="email" style={labelStyles}>Correo Electrónico:</label>
                <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyles}
                />
              </div>

              <button type="submit" style={buttonStyles}>Confirmar Compra</button>
            </form>
        </div>
    );
}

export default Compra;
    