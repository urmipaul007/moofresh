# 🛒 MooFresh - Modern Grocery Delivery Application

MooFresh is a fully responsive, multi-view web application built to serve both customers looking for fresh grocery delivery and riders handling those orders. Designed with a mobile-first philosophy, MooFresh offers a smooth, snappy, and intuitive experience.

## ✨ Key Features

- **Store & Product Catalog:** Browse a wide variety of fresh groceries categorized for easy discovery.
- **Cart & Checkout Flow:** Seamlessly add items to your cart, set delivery times, and choose from multiple payment options (UPI, Cards, COD) before securely placing an order.
- **Live Delivery Tracking:** Real-time visual tracking interface utilizing Google Maps, displaying estimated arrival times, status timelines, and rider information.
- **Order History & Subscriptions:** Easy access to your past orders with a convenient "Reorder" feature, along with subscription management for recurring deliveries.
- **Responsive Layout:** A flexible user interface ensuring an excellent mobile user experience via bottom navigation bars while maintaining robust usability on larger screens.
- **Localized Experience:** Out-of-the-box support for localized currency (Indian Rupees - ₹).

## 🛠️ Technology Stack

- **[React 19](https://react.dev/):** UI library for building component-driven interfaces.
- **[Vite](https://vitejs.dev/):** Next-generation frontend tooling providing an ultra-fast development server and optimized build process.
- **[React Router DOM](https://reactrouter.com/):** Used for smooth and dynamic single-page navigation across all app screens.
- **[Lucide React](https://lucide.dev/):** Delivering beautiful, consistent, and clean iconography.

## 🚀 Getting Started

Follow these steps to run the MooFresh project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher is recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd moofresh
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```

3. **Start the development server:**
   Using npm:
   ```bash
   npm run dev
   ```

4. **Verify:**
   Open your browser and navigate to `http://localhost:5173` to see the application running live!

### API Keys
*(Optional)* The application uses the Google Maps Embed API on the `Checkout` and `TrackDelivery` pages. You can replace the placeholder `key` in those respective component iframes with your own Google Maps API Key for full functionality.

## 📂 Project Structure

```text
moofresh/
├── src/
│   ├── components/      # Reusable UI elements (Header, BottomNav, etc.)
│   ├── pages/           # Application screens (Home, TrackDelivery, Checkout, etc.)
│   ├── App.jsx          # Root component and top-level router configuration
│   ├── App.css          # Global styling conventions and CSS variables
│   └── main.jsx         # Application entry point
├── public/              # Static public assets
├── package.json         # Project metadata, scripts, and dependencies
└── vite.config.js       # Configuration for Vite
```

## 📜 Available Scripts

- `npm run dev`: Starts the local development server with Hot Module Replacement (HMR).
- `npm run build`: Bundles the application output into static files for production inside the `dist/` directory.
- `npm run lint`: Runs ESLint to statically analyze the code for quality errors.
- `npm run preview`: Boots up a local server to serve the optimized production build (`dist/`).
