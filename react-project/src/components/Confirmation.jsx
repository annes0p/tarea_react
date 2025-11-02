const confirmationStyles = {
  textAlign: 'center',
  padding: '40px 20px',
  background: '#f0fdf4',
  border: '1px solid #bbf7d0',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '20px auto',
};

const buttonStyles = {
  backgroundColor: '#6a1b9a',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  marginTop: '20px',
};

function Confirmation({ compraData, onBack }) {
    return (
        <div style={confirmationStyles}>
            <h2 style={{ color: '#22c55e'}}>Compra Exitosa!</h2>
            <p>Gracias por tu compra, {compraData.name}!</p>
            <p>Un correo de confirmación ha sido enviado a {compraData.email}.</p>
            <button onClick={onBack} style={buttonStyles}>Volver</button>
        </div>
    );
}

export default Confirmation;