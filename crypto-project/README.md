# 🚀 Crypto Tracker: Real-Time Cryptocurrency Dashboard

A powerful React application that provides real-time cryptocurrency prices, market data, and detailed coin information with automatic 30-second updates.

## ✨ Features

* Real-time cryptocurrency price tracking
* Detailed coin information pages with price charts
* Advanced filtering and sorting capabilities
* Responsive grid and list views
* Automatic data refresh every 30 seconds
* Manual refresh functionality
* Comprehensive market statistics
* Clean, modern UI with glassmorphism design

## 🛠 Technologies Used

### Frontend
* React 19
* TypeScript 5
* React Query 5
* Recharts for data visualization
* React Router 7

### Backend
* CoinGecko API for cryptocurrency data
* Fetch API for data retrieval

### Development Tools
* Vite 7 for build tool
* ESLint 9 for code quality
* TypeScript 5 for type checking
* React Query 5 for data management

## 🏗 Application Structure

```
crypto-project/
├── public/
│   └── robots.txt
├── src/
│   ├── api/
│   │   └── coinGecko.ts
│   ├── components/
│   │   └── CryptoCard.tsx
│   ├── lib/
│   │   └── queryClient.ts
│   ├── pages/
│   │   ├── CoinDetails.tsx
│   │   └── Home.tsx
│   ├── types/
│   │   └── dataTypes.ts
│   ├── utils/
│   │   ├── formatter.ts
│   │   └── (other utility files)
│   ├── App.css
│   ├── App.tsx
│   └── main.tsx
├── .eslintrc.json
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

