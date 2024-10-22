import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav";
import { Err } from "./pages/Err";
import { Transections } from "./pages/Transections";
import { BillPay } from "./pages/BillPay";
import { History } from "./pages/History";
import { AccDetails } from "./pages/AccDetails";
import { ExRates } from "./pages/ExRates";
import { Settings } from "./pages/Settings";
import { Card } from "./pages/Card";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/*" element={<Err />} />
        <Route path="/transections" element={<Transections />} />
        <Route path="/billPayments" element={<BillPay />} />
        <Route path="/history" element={<History />} />
        <Route path="/accDetails" element={<AccDetails />} />
        <Route path="/exRates" element={<ExRates />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
