function TicketSelector({ tickets, onAddToCart, cart }) {
    return(
    <section className="ticket-selector"> 
        <h3>Selecciona tus entradas</h3>
        {tickets.map(ticket => { 
            const itemInCart = cart.find(item => item.id === ticket.id); // Buscar el item en el carrito
            const quantityInCart = itemInCart ? itemInCart.quantity : 0;  // Obtener la cantidad en el carrito
            const remainingStock = ticket.stock - quantityInCart; // Calcular el stock restante
            return (
            <div key={ticket.id} className="ticket-option"> 
                <div>
                    <h4>{ticket.name}</h4> 
                    <p>{ticket.price} (Disponibles: {remainingStock})</p> 
                </div>
                <button onClick={() => onAddToCart(ticket.id)} 
                    disabled={remainingStock === 0}>
                    {remainingStock === 0 ? 'Agotado' : 'Agregar al Carrito'}
                </button>
            </div>
            );
        })}
    </section>
    );
}
    
export default TicketSelector;