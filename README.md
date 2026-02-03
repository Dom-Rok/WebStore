
## 📝 Overview

This is a modern e-commerce application for gym supplements built with:

-   ⚛️ React 18
-   🌐 Next.js 14 (App Router)
-   🎨 Tailwind CSS
-   🔐 NextAuth.js for authentication
-   🛒 FakeStoreAPI as backend
    

## ✨ Features
-   **Responsive design** - Works on mobile, tablet and desktop
-   **Secure authentication** - JWT-based login system
-   **Product browsing** - View all available supplements
-   **Product details** - Detailed information about each product
-   **Protected routes** - Only logged-in users can access products
-   **Modern UI** - Clean, user-friendly interface with Tailwind CSS
    

## 🚀 Getting Started

### Prerequisites
-   Node.js 18+
-   npm or yarn

### Installation

1   Install dependencies:

 ```
npm install
```    
-   Create a `.env` file in the root directory
``` 
#.env
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```
-   Run the development server:
 
```  npm run dev ```    
2.  Open [http://localhost:3000](http://localhost:3000) in your browser.


## 📱 Pages

### 1. Introduction (Landing Page)

-   Hero section with slideshow
-   Featured products
-   Call-to-action for login/signup

### 2. Login Page

-   Username/password authentication    

### 3. Products Page (Protected)

-   Grid/list view of all products
-   Filtering by category

### 4. Product Details (Protected)

-   High-resolution product image
-   Detailed description
-   Price and availability
-   Similar products showcase
    



## 🎨 Styling Approach

-   **Tailwind CSS** for utility-first styling
-   **Responsive breakpoints** for all device size
-   **Custom animations** for interactive elements
-   **Loading skeleton** for product details page
