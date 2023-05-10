import DamageCalulator from "./components/DamageCalculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import InsuranceCalculator from "./components/InsuranceCalculator";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/damagecalculator" element={<DamageCalulator />} />
        <Route path="/insurancecalculator" element={<InsuranceCalculator />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
