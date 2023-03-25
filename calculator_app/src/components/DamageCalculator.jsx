import { useState } from "react";
import DamageCalculatorChart from "./DamageCalculatorChart";
import DamageCalculatorForm from "./DamageCalculatorForm";

function DamageCalulator() {
  const [damageData, setDamageData] = useState({
    id: 1,
    suminsured: 0,
    insurancevalue: 0,
    damage: 0,
  });

  const calculateDamage = () => {
    if (damageData.insurancevalue && damageData.suminsured && damageData.damage)
      return (
        (damageData.suminsured / damageData.insurancevalue) * damageData.damage
      );
  };

  return (
    <>
      <DamageCalculatorForm
        setDamageData={setDamageData}
        damageData={damageData}
      />
      <DamageCalculatorChart calculateDamage={calculateDamage} />
    </>
  );
}
export default DamageCalulator;
