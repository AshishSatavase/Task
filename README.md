# Eclypse - Modern Fashion E-commerce Platform

![Eclypse Logo](/frontend/public/logo.png)

## 🌟 Live Demo
Visit our live website: [Eclypse](https://eclypse-3ccc.onrender.com/)

## 🚀 Overview
Eclypse is a modern, responsive e-commerce platform built with React and Node.js, featuring a sleek design and intuitive user interface. The platform showcases premium fashion products with an emphasis on user experience and visual appeal.

## 🛠️ Tech Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Router for navigation
- Hero Icons for UI elements

### Backend
- Node.js with Express
- JSON file-based data storage (for demo purposes)
- RESTful API endpoints

## 🎯 Features
- Responsive design for all devices
- Product showcase with video and image galleries
- Size selection with size chart
- Shopping cart functionality
- Checkout process
- Waitlist system
- Beautiful UI with smooth animations

## 📦 Project Structure
```
eclypse/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── sections/     # Main page sections
│   │   └── types/        # TypeScript type definitions
│   └── public/       # Static assets
└── backend/          # Node.js backend server
    ├── data/         # JSON data files
    └── index.js      # Main server file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The server will run on http://localhost:3000

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:5173

## 🔄 API Endpoints

### Cart Endpoints
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart/:id` - Remove item from cart

### Product Endpoints
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

## 🎨 Design Features
- Modern, minimalist design
- Smooth transitions and animations
- Responsive layout for all screen sizes
- High-quality product imagery
- Intuitive navigation

## 🌐 Deployment
The application is deployed on Render:
- Frontend: Static site deployment
- Backend: Web service deployment

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact
For any queries or support, please reach out to us at [ashishsatavase13@gmail.com](mailto:ashishsatavase13@gmail.com) 