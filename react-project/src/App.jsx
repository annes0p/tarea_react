import { useState } from "react";
import Header from "./components/Header";
import TicketSelector from "./components/TicketSelector";
import Cart from "./components/Cart";
import Compra from "./components/Compra";
import Confirmation from "./components/Confirmation";
import './index.css';

const concertData = {
  artist: 'Taylor Swift',
  tour: 'The Eras Tour',
  venue: 'Estadio Nacional',
  date: '2 de Enero, 2027',
}

const availableTickets = [
  { id: 'gen', name: 'Entrada General', price: 250, stock: 50 },
  { id: 'vip', name: 'Entrada VIP', price: 500, stock: 30 },
  { id: 'plat', name: 'Entrada Platino', price: 1000, stock: 20 },
];

function App() {

  const [cart, setCart] = useState([]);

  const [view, setView] = useState('selector'); // 'selector', 'cart', 'compra', 'confirmation'

  const [compraData, setCompraData] = useState(null);

  const handleAddToCart = (ticketId) => {

    console.log(`Agregando al carrito: ${ticketId}`);

    const ticket = availableTickets.find(t => t.id === ticketId);

      setCart(prevCart => {



        const existingTicket = prevCart.find(item => item.id === ticketId);
        const currentQuantity = existingTicket ? existingTicket.quantity : 0;

        if (currentQuantity >= ticket.stock) {
          alert(`Lo sentimos! No contamos con stock para "${ticket.name}"`);
          return prevCart;   
        }
        if (existingTicket) {
          return prevCart.map(item =>
            item.id === ticketId
              ? { ...item, quantity: item.quantity + 1 }
              : item
        );
      } else {
          return [...prevCart, { id: ticketId, quantity: 1 }];
        }
    });
  };

  const handleCheckOut = () => {
    console.log("Cambiando a vista de compra");
    setView('compra');
  };

  const handleConfirmCompra = (userData) => {
    console.log("Compra confirmada:", userData);
    setCompraData(userData);
    setView('confirmation');
    setCart([]);
    localStorage.setItem('compra', JSON.stringify(userData));
  }

  if (view === 'selector') {
    return(
      <div className="app-container">
        <Header info={concertData} />
        <main>
          <TicketSelector
            tickets={availableTickets}
            onAddToCart={handleAddToCart}
            cart={cart}
          />
          <Cart
            cart={cart}
            tickets={availableTickets}
            onCheckOut={handleCheckOut}
          />
        </main>
      </div>
    );
  }

  if (view === 'compra') {
    return (
      <div className="app-container">
        <Header info={concertData} />
        <Compra onConfirm={handleConfirmCompra} />
      </div>
    )
  }
  
  if (view === 'confirmation') {
    return (
      <div className="app-container">
        <Header info={concertData} />
        <Confirmation
          compraData={compraData}
          onBack={() => setView('selector')}
        />
      </div>
    )
  }
}

export default App;