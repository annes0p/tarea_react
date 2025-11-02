function Cart({ cart, tickets, onCheckOut }) {

    const getTicketDetails = (id) => tickets.find(t => t.id === id);

    const cartItems = cart.map(item => {
        const details = getTicketDetails(item.id);
        return {
            ...details,
            quantity: item.quantity
        };
    });

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <aside className="cart">
            <h3>Carrito de Compras</h3>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} (x{item.quantity}) - <strong>${item.price * item.quantity}</strong>
                        </li>
                    ))}
                </ul>
                <hr />
                <h4>Total: ${total}</h4>

                <button
                    onClick={onCheckOut}
                    style={{
                        width: '100%',
                        padding: '12px',
                        fontSize: '1.1rem',
                        backgroundColor: '#42b72a',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}
                >
                    Finalizar Compra
                </button>
                </>
            )}
        </aside>
    );
}

export default Cart;