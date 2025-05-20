import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  productId: number;
  quantity: number;
  id: number; // Assuming product details are nested or included
  name: string;
  description: string;
  price: number;
  images: string[];
  video?: string;
  sizeOptions?: string[];
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch('/api/cart');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CartItem[] = await response.json();
        setCartItems(data);
      } catch (err) {
        console.error('Error fetching cart:', err);
        setError('Failed to load cart items.');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <div className="flex justify-center items-center h-screen bg-white text-black">Loading cart...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen bg-white text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full bg-white text-black pt-24 pb-16 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-light mb-12">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96">
            <p className="text-xl text-gray-600">Your cart is empty.</p>
            <button 
              onClick={() => navigate('/')}
              className="mt-6 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Cart Items */}
            <div className="w-full lg:w-3/5 border border-gray-200 rounded-lg p-6 space-y-6">
              {cartItems.map(item => (
                <div key={item.productId} className="flex items-start border-b border-gray-200 pb-6 last:border-b-0">
                  <img src={item.images[0] || '/placeholder.svg'} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-6" />
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg md:text-xl font-medium mb-1">{item.name}</h2>
                      <p className="text-gray-600 text-sm">Price: ₹ {item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <p className="text-gray-700 text-sm mr-4">Quantity: {item.quantity}</p>
                      {/* Add remove/update quantity buttons here later if needed */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Order Summary / Checkout Button */}
            <div className="w-full lg:w-2/5 bg-gray-100 rounded-lg p-6 flex flex-col sticky top-24">
               <h2 className="text-xl font-medium mb-6">Order Summary</h2>
               
               <div className="space-y-4 mb-6 text-gray-700 text-sm">
                 <div className="flex justify-between">
                   <span>Subtotal:</span>
                   <span>₹ {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}</span>
                 </div>
                 {/* Add shipping, tax, etc. here later */}
               </div>

              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="flex justify-between text-xl font-medium text-black">
                  <span>Order Total:</span>
                  <span>₹ {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors mt-auto"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 