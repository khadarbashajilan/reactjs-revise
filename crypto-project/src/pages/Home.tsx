import { useEffect, useState } from "react";
import type { CoinMarketData } from "../types/dataTypes";
import { CryptoCard } from "../components/CryptoCard";
import { useCryptos } from '../api/coinGecko';

const Home = () => {
  // Use React Query hook
  const { data: cryptos, isLoading, error, refetch } = useCryptos();

  // Local state for filtering
  const [filteredList, setFilteredList] = useState<CoinMarketData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("market_cap");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter and sort function
  const filterAndSort = () => {
    if (!cryptos) return;

    const filtered = cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.sort((a: CoinMarketData, b: CoinMarketData) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price":
          return a.current_price - b.current_price;
        case "price_desc":
          return b.current_price - a.current_price;
        case "change":
          return (
            (a.price_change_percentage_24h || 0) -
            (b.price_change_percentage_24h || 0)
          );
        case "market_cap":
          return (a.market_cap_rank || 0) - (b.market_cap_rank || 0);
        default:
          return 0;
      }
    });

    setFilteredList(filtered);
  };

  // Effect for filtering/sorting when data or filters change
  useEffect(() => {
    filterAndSort();
  }, [searchQuery, sortBy, cryptos]);

  // Error handling
  if (error) {
    return (
      <div className="app">
        <div className="error">
          <p>Error loading data: {error.message}</p>
          <button onClick={() => refetch()}>Retry</button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <h1> Crypto Tracker</h1>
            <p>Real-time cryptocurrency prices and market data</p>
          </div>
          <div className="search-section">
            <input
              type="text"
              placeholder="Search cryptos..."
              className="search-input"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          </div>
        </div>
      </header>

      <div className="controls">
        <div className="filter-group">
          <label> Sort by : </label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="market_cap_rank">Rank</option>
            <option value="name">Name</option>
            <option value="price">Price (Low to High)</option>
            <option value="price_desc">Price (High to Low)</option>
            <option value="change">24h Change</option>
            <option value="market_cap">Market Cap</option>
          </select>
        </div>
        <div className="view-toggle">
          <button
            className={viewMode === "grid" ? "active" : ""}
            onClick={() => setViewMode("grid")}
          >
            Grid
          </button>
          <button
            className={viewMode === "list" ? "active" : ""}
            onClick={() => setViewMode("list")}
          >
            List
          </button>
        </div>
      </div>

      {/* Main */}

      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading crypo data ... </p>
        </div>
      ) : (
        <div className={`crypto-container ${viewMode}`}>
          {filteredList?.map((crypto: CoinMarketData, key: number) => (
            <CryptoCard crypto={crypto} key={key} />
          ))}
        </div>
      )}

      <footer className="footer">
        <p>Data provided by CoinGecko API • Updated every 30 seconds</p>
      </footer>
    </div>
  );
};

export default Home;
