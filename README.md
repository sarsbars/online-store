# Online Store 🛒

This is an online store web application built with React, utilizing the FakeStore API to create a dynamic e-commerce experience. This project was developed as the final project for the Introduction to React course (SD-260) at Manitoba Institute of Trades and Technology. The application features a responsive design inspired by professional e-commerce websites.

## Project Features
- **Multiple Pages**: Includes four core pages: Home, Product (Detail), Cart, and NotFound (404 page), built using React components for modularity.
- **FakeStore API Integration**: Fetches product data dynamically using `axios` from `https://fakestoreapi.com` to populate the store’s inventory.
- **Product Sorting**: The Home page allows users to sort products by price (low to high, high to low) and name (A-Z, Z-A) via a dropdown menu.
- **Product Detail Page**: Displays detailed product information, including image, title, description, price, and an "Add to Cart" button, with a gallery of three similar products below.
- **Cart Functionality**: Utilizes a `CartProvider` context to manage cart state across the application, allowing users to add products to the cart.
- **Routing**: Implements `react-router-dom` for navigation, with proper route management and redirection to the NotFound page for invalid routes or product IDs.
- **Professional Design**: Incorporates `framer-motion` for smooth page transitions and a responsive layout inspired by [Behance E-Commerce Furniture Website Design](https://www.behance.net/gallery/226078053/E-Commerce-Furniture-Website-Design) and [Dribbble Furniture E-Commerce Website Design](https://dribbble.com/shots/25501129-Furniture-E-Commerce-Website-Design).
- **Component-Based Architecture**: Utilizes reusable components such as `Header`, `HeroBanner`, `ProductGallery`, `Stats`, `WhatWeOffer`, `ContactForm`, and more for a modular structure.
- **Hosted on GitHub Pages**: The site is deployed at [https://sarsbars.github.io/online-store/](https://sarsbars.github.io/online-store/).

## Technologies Used
- HTML5
- CSS3
- JavaScript (JSX)
- React
- React Router (`react-router-dom`)
- Axios
- Framer Motion
- Font Awesome (for star ratings)
- React Icons (for cart icon)
- Markdown
- GitHub Pages

## Project Structure
- `src/`
  - `components/`
    - `Header.js`: Navigation bar for the application.
    - `HeroBanner.js`: Promotional banner on the Home page.
    - `ProductGallery.js`: Displays and sorts products fetched from the FakeStore API.
    - `Stats.js`: Highlights key store statistics.
    - `WhatWeOffer.js`: Describes store offerings.
    - `ContactForm.js`: User contact form.
    - `CartContext.js`: Manages cart state across the application.
  - `pages/`
    - `Home.js`: Main page with product gallery and other components.
    - `Detail.js`: Product detail page with similar products gallery.
    - `Cart.js`: Displays cart contents.
    - `NotFound.js`: 404 page for invalid routes.
  - `css/index.css`: Global styles for the application.
  - `App.js`: Main app component with routing and context provider.

## Requirements
- Node.js v16 or higher
- npm v8 or higher
- Internet connection for fetching data from the FakeStore API

## Team Contributions
- **Sarah Mitchell (Team Lead)**: Developed `Detail.js`, `NotFound.js`, and `Cart.js`, and oversaw project coordination and deployment.
- **Ashedzi Solomon**: Designed the Home page and overall UI, focusing on components like `Home.js`, `HeroBanner.js`, `Stats.js`, `WhatWeOffer.js`, and `ContactForm.js`.