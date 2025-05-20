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
  video: "/Silhouette/Silhouette.mp4",
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
    <section className={`w-full bg-black ${className || ''}`}>
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row md:overflow-visible">
        {/* Left: Product video/image */}
        <div className="w-full md:w-1/2 h-[600px] md:h-screen md:flex-none">
          <video src={product.video} className="w-full h-full object-cover" autoPlay loop muted playsInline />
        </div>

        {/* Right: Product details */}
        <div className="w-full md:w-1/2 bg-white p-4 md:p-12 flex flex-col md:h-screen pb-6 md:pb-24 md:flex-none overflow-y-auto">
          <div className="flex-grow">
            <p className="text-black text-base md:text-lg mb-4 md:mb-8">{product.description}</p>

            {/* Product images */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
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
            {/* Thin separator below images */}
            <div className="w-full h-px bg-gray-200 mb-4 md:mb-6" />
          </div>

          {/* Price and size selection */}
          <div className="mt-auto">
            <div className="border-t border-gray-200 pt-4 md:pt-6 mb-4 md:mb-6">
              <div className="flex items-baseline">
                <h3 className="text-xl md:text-3xl font-bold text-black">₹ {product.price.toLocaleString()}</h3>
                <span className="ml-1 md:ml-3 text-xs text-gray-500">MRP incl. of all taxes</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-3">
              <p className="text-xs text-gray-500 font-medium">Please select a size</p>
              <div className="flex gap-2 md:gap-4">
                {product.sizeOptions.map((size, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 md:w-12 md:h-12 rounded-md flex items-center justify-center transition-colors text-xs md:text-base ${
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
              <button type="button" onClick={() => setIsSizeChartOpen(true)} className="text-xs underline text-gray-500 text-left w-fit">
                Size chart
              </button>
            </div>
            {/* Thin separator below size selection */}
            <div className="w-full h-px bg-gray-200 mb-8 md:mb-8" />

            {/* Action buttons */}
            <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-4 w-full mb-8">
              <button
                onClick={handleAddToCart}
                className="border border-black text-black py-2 px-4 rounded-lg flex-1 hover:bg-gray-100 transition-colors text-xs md:text-lg"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate('/checkout')}
                className="bg-black text-white py-2 px-4 rounded-lg flex-1 hover:bg-red-600 transition-colors text-xs md:text-lg"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Size Chart Modal */}
      {isSizeChartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 ">
          <div className="bg-black rounded-xl border-white border-2 p-2 rounded-lg shadow-lg w-[90vw] max-w-md p-6 relative mx-2 text-white">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setIsSizeChartOpen(false)}
              aria-label="Close size chart"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h2 className="text-lg font-semibold mb-4 text-center text-white">Size Chart</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs md:text-sm text-left border-collapse text-white">
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
