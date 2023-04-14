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
    }
  };

  return (
    <>
      <Navbar />
      <DamageCalculatorForm
        setDamageData={setDamageData}
        damageData={damageData}
      />
      <DamageCalculatorChart calculateDamage={calculateDamage} />
    </>
  );
}
export default DamageCalulator;
