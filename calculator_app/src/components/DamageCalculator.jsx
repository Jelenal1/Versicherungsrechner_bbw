import { useState } from "react";
import DamageCalculatorChart from "./DamageCalculatorChart";
import DamageCalculatorForm from "./DamageCalculatorForm";
import Navbar from "./Navbar";

function DamageCalulator() {
  const [damageData, setDamageData] = useState({
    id: 1,
    suminsured: 0,
    insurancevalue: 0,
    damage: 0,
  });

  const calculateDamage = () => {
    const damageCalculated =
      (damageData.suminsured / damageData.insurancevalue) * damageData.damage;
    if (
      damageData.insurancevalue &&
      damageData.suminsured &&
      damageData.damage
    ) {
      if (damageCalculated > damageData.damage) {
        if (damageData.damage <= damageData.suminsured) {
          return damageData.damage;
        }
        if (damageData.damage > damageData.suminsured) {
          return damageData.suminsured;
        }
      } else {
        if (damageCalculated > damageData.suminsured) {
          return damageData.suminsured;
        } else {
          return damageCalculated;
        }
      }
    } else {
      return "__";
    }
  };

  const calculatePercent = () => {
    if (damageData.insurancevalue && damageData.suminsured) {
      return (damageData.suminsured / damageData.insurancevalue) * 100;
    } else {
      return "__";
    }
  };

  const underOrOverInsured = () => {
    if (calculatePercent() > 100) {
      return "Sie sind über versichert";
    }
    if (calculatePercent() < 100) {
      return "Sie sind überversichert";
    }
  };

  return (
    <>
      <Navbar />
      <DamageCalculatorForm
        setDamageData={setDamageData}
        damageData={damageData}
      />
      <DamageCalculatorChart
        calculateDamage={calculateDamage}
        calculatePercent={calculatePercent}
        underOrOverInsured={underOrOverInsured}
      />
    </>
  );
}
export default DamageCalulator;
