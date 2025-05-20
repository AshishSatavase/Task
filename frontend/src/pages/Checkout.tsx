"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircleIcon } from '@heroicons/react/24/outline'

interface AddressFormData {
  firstName: string
  lastName: string
  streetAddress: string
  aptNumber: string
  state: string
  zip: string
}

const Checkout: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<AddressFormData>({
    firstName: "",
    lastName: "",
    streetAddress: "",
    aptNumber: "",
    state: "",
    zip: "",
  })
  const [isOrderConfirmedModalOpen, setIsOrderConfirmedModalOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSaveAddress = () => {
    // Save address logic here
    alert("Address saved!")
  }

  const handleCancel = () => {
    navigate(-1)
  }

  const handlePlaceOrder = () => {
    // Basic validation: Check if all required fields are filled
    const requiredFields: (keyof AddressFormData)[] = ['firstName', 'lastName', 'streetAddress', 'aptNumber', 'state', 'zip'];
    const allFieldsFilled = requiredFields.every(field => formData[field].trim() !== '');

    if (!allFieldsFilled) {
      alert('Please fill in all required address fields.');
      return; // Stop here if validation fails
    }

    // Place order logic here (replace with actual order placement API call)
    // After successful order placement:
    const placeOrder = async () => {
      try {
        const response = await fetch('/api/cart/buy', {
          method: 'POST',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result.message); // Log the success message
        setIsOrderConfirmedModalOpen(true); // Open the modal
      } catch (error) {
        console.error('Error placing order:', error);
        alert('Failed to place order.'); // Show error message
      }
    };

    placeOrder();
  }

  const handleOkClick = () => {
    setIsOrderConfirmedModalOpen(false)
    navigate('/')
  }

  return (
    <div className="w-full bg-white text-black pt-16 pb-16">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate(-1)} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-light">Shipping Address</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Address Form */}
          <div className="w-full lg:w-3/5 border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
              </div>
              <h2 className="text-xl">Add New Address</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-3"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div>
                <label className="block mb-2">Apt Number</label>
                <input
                  type="text"
                  name="aptNumber"
                  value={formData.aptNumber}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                />
              </div>
              <div>
                <label className="block mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                />
              </div>
              <div>
                <label className="block mb-2">Zip</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleCancel}
                className="w-1/2 border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                cancel
              </button>
              <button
                onClick={handleSaveAddress}
                className="w-1/2 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Save This Address
              </button>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-2/5 bg-gray-100 rounded-lg p-6">
            <div className="mb-6">
              <p className="text-gray-600">
                By placing your order, you agree to our company{" "}
                <a href="#" className="font-medium">
                  Privacy policy
                </a>{" "}
                and{" "}
                <a href="#" className="font-medium">
                  Conditions of use
                </a>
                .
              </p>
            </div>

            <h2 className="text-xl font-medium mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Items - Silhouette No. 1 – Vermilion</span>
                <span>7,999</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping and handling:</span>
                <span>200</span>
              </div>
              <div className="flex justify-between">
                <span>Before tax:</span>
                <span>6,599</span>
              </div>
              <div className="flex justify-between">
                <span>Tax Collected:</span>
                <span>1,400</span>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4 mb-8">
              <div className="flex justify-between text-xl font-medium">
                <span>Order Total:</span>
                <span>8,199</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-red-500 text-white py-4 rounded hover:bg-red-600 transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Order Confirmed Modal */}
      {isOrderConfirmedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center mx-4">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-black mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-6">Your order has been placed successfully.</p>
            <button
              onClick={handleOkClick}
              className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout
