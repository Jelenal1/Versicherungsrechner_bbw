import DamageCalulator from "./components/DamageCalculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/damagecalculator" element={<DamageCalulator />} />
      </Routes>
    </Router>
  );
}

export default App;
