import { useState } from "react";
import DamageCalculatorForm from "./DamageCalculatorForm";

function DamageCalulator() {
  const [damageData, setDamageData] = useState({
    id: 1,
    suminsured: 0,
    insurancevalue: 0,
    damage: 0,
  });

  return (
    <DamageCalculatorForm
      setDamageData={setDamageData}
      damageData={damageData}
    />
  );
}
export default DamageCalulator;
