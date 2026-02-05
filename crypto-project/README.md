# 🚀 Crypto Tracker: Real-Time Cryptocurrency Dashboard

A React application tracking cryptocurrency prices with 30-second auto-updates and detailed coin analytics.

## ✨ Key Features

* Real-time price tracking with 30s auto-refresh
* Detailed coin pages with price charts
* Advanced filtering and sorting
* Responsive grid/list views
* Manual refresh capability
* Comprehensive market stats
* Modern glassmorphism UI

## 🛠 Tech Stack

### Frontend
* React 19 + TypeScript 5
* React Query 5 (data management)
* Recharts (visualization)
* React Router 7 (navigation)

### Backend
* CoinGecko API (data source)
* Fetch API (data retrieval)

### Development
* Vite 7 (build tool)
* ESLint 9 (code quality)
* TypeScript 5 (type checking)

## 🏗 Project Structure

```
crypto-project/
├── public/          # Static assets
├── src/
│   ├── api/          # API service
│   ├── components/   # Reusable UI
│   ├── lib/          # Core utilities
│   ├── pages/        # Route components
│   ├── types/        # Type definitions
│   ├── utils/        # Helper functions
│   ├── App.css       # Global styles
│   ├── App.tsx       # Main app
│   └── main.tsx      # Entry point
└── config files      # Project configuration
```

## 🔄 Data Flow

1. **Initial Load**:
   - Components call React Query hooks
   - Data fetched from CoinGecko API
   - Processed and cached by React Query

2. **Auto-Refresh**:
   - React Query updates data every 30s
   - UI automatically reflects changes

3. **Manual Refresh**:
   - User triggers refresh via UI
   - React Query invalidates cache
   - Fresh data fetched and displayed

## 🚀 Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

Built with React Query for efficient data management and Recharts for beautiful visualizations.