"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import type { Product } from "../types"
import { XMarkIcon } from '@heroicons/react/24/outline'

interface SilhouetteProps {
  className?: string;
}

const productData: Product = {
  id: 1,
  name: "Silhouette No. 1",
  description:
    "A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.",
  sizeOptions: ["XS", "S", "M", "L", "XL"],
  price: 7999,
  images: ["/Silhouette/Silhouette1.jpg", "/Silhouette/Silhouette2.jpg","/Silhouette/Silhouette3.jpg"],
  video: "https://res.cloudinary.com/dpsdvoyr3/video/upload/v1747767371/Task/aqwavrfs76bms5lcgawn.mp4",
}

const Silhouette: React.FC<SilhouetteProps> = ({ className }) => {
  const navigate = useNavigate()
  const product = productData
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false)

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size")
      return
    }
    navigate("/cart")
  }

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert("Please select a size")
      return
    }

    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product.id, size: selectedSize }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Product added to cart:', result);
      alert('Added to cart!');

    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart.');
    }
  }

  const handleSizeSelect = (size: string) => {
    if (selectedSize === size) {
      setSelectedSize(null)
    } else {
      setSelectedSize(size)
    }
  }

  return (
    <section className={`w-full min-h-screen bg-black ${className || ''}`}>
      <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row">
        {/* Left: Product video/image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen">
          <video 
            src={product.video} 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
        </div>

        {/* Right: Product details */}
        <div className="w-full lg:w-1/2 bg-white p-6 lg:p-12 flex flex-col justify-between min-h-[50vh] lg:min-h-screen">
          {/* Top section with description and images */}
          <div className="space-y-6">
            <p className="text-black text-sm lg:text-base">{product.description}</p>

            {/* Product images */}
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section with price, size selection, and buttons */}
          <div className="mt-8 space-y-6">
            {/* Price */}
            <div className="flex items-baseline">
              <h3 className="text-2xl lg:text-3xl font-bold text-black">₹ {product.price.toLocaleString()}</h3>
              <span className="ml-2 text-xs text-gray-500">MRP incl. of all taxes</span>
            </div>

            {/* Size selection */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-medium">Please select a size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizeOptions.map((size, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 lg:w-12 lg:h-12 rounded-md flex items-center justify-center transition-colors text-sm ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "border border-gray-300 text-gray-800 hover:bg-gray-100"
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button 
                type="button" 
                onClick={() => setIsSizeChartOpen(true)} 
                className="text-xs underline text-gray-500"
              >
                Size chart
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 border border-black text-black py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm lg:text-base"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate('/checkout')}
                className="flex-1 bg-black text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors text-sm lg:text-base"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Size Chart Modal */}
      {isSizeChartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-black rounded-xl border-white border-2 p-6 w-[90vw] max-w-md relative mx-2 text-white">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setIsSizeChartOpen(false)}
              aria-label="Close size chart"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h2 className="text-lg font-semibold mb-4 text-center">Size Chart</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs md:text-sm text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-2 px-2 border-b border-gray-700 font-semibold">Size</th>
                    <th className="py-2 px-2 border-b border-gray-700 font-normal">Chest (in)</th>
                    <th className="py-2 px-2 border-b border-gray-700 font-normal">Waist (in)</th>
                    <th className="py-2 px-2 border-b border-gray-700 font-normal">Length (in)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-2 px-2 border-b border-gray-700">XS</td><td className="py-2 px-2 border-b border-gray-700">32</td><td className="py-2 px-2 border-b border-gray-700">24</td><td className="py-2 px-2 border-b border-gray-700">38</td></tr>
                  <tr><td className="py-2 px-2 border-b border-gray-700">S</td><td className="py-2 px-2 border-b border-gray-700">34</td><td className="py-2 px-2 border-b border-gray-700">26</td><td className="py-2 px-2 border-b border-gray-700">39</td></tr>
                  <tr><td className="py-2 px-2 border-b border-gray-700">M</td><td className="py-2 px-2 border-b border-gray-700">36</td><td className="py-2 px-2 border-b border-gray-700">28</td><td className="py-2 px-2 border-b border-gray-700">40</td></tr>
                  <tr><td className="py-2 px-2 border-b border-gray-700">L</td><td className="py-2 px-2 border-b border-gray-700">38</td><td className="py-2 px-2 border-b border-gray-700">30</td><td className="py-2 px-2 border-b border-gray-700">41</td></tr>
                  <tr><td className="py-2 px-2 border-b border-gray-700">XL</td><td className="py-2 px-2 border-b border-gray-700">40</td><td className="py-2 px-2 border-b border-gray-700">32</td><td className="py-2 px-2 border-b border-gray-700">42</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Silhouette
