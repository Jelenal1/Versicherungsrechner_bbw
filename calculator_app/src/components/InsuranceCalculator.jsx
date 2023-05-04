import { useState } from "react";
import InsuranceCalculatorInputForm from "./InsuranceCalculatorInputForm";
import Navbar from "./Navbar";

function InsuranceCalculator() {
  const [houseItems, setHouseItems] = useState();
  return (
    <>
      <Navbar />
      <InsuranceCalculatorInputForm />
    </>
  );
}
export default InsuranceCalculator;