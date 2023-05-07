import { useState } from "react";
import InsuranceCalculatorInputForm from "./InsuranceCalculatorInputForm";
import Navbar from "./Navbar";
import InsuranceCalculatorItems from "./InsuranceCalculatorItems";

function InsuranceCalculator() {
  const [houseItems, setHouseItems] = useState([]);
  return (
    <>
      <Navbar />
      <InsuranceCalculatorInputForm setHouseItems={setHouseItems} />
      <InsuranceCalculatorItems houseItems={houseItems} />
    </>
  );
}
export default InsuranceCalculator;
