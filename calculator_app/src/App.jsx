import DamageCalulator from "./components/DamageCalculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/damagecalculator" element={<DamageCalulator />} />
      </Routes>
    </Router>
  );
}

export default App;
