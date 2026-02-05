import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import CoinDetails from "./pages/CoinDetails";
import {  QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
export default App;
