function DamageCalculatorForm({ setDamageData }) {
  return (
    <div className="p-2">
      <h1 className="text-3xl text-center mb-3">Schadensrechner</h1>
      <div className="flex flex-col gap-5 max-w-4xl mx-auto bg-violet-400 rounded-2xl p-3">
        <div className="flex flex-col">
          <label htmlFor="versicherungssumme" className="ml-1 mb-1 text-lg">
            Versicherungssumme angeben
          </label>
          <input
            type="number"
            name="versicherungssumme"
            placeholder="VERSICHERUNGSSUMME"
            className="rounded-2xl p-2"
            min={0}
            step={10}
            onChange={(e) => {
              setDamageData((damageData) => ({
                ...damageData,
                ...{
                  id: damageData.id,
                  suminsured: parseInt(e.target.value),
                  insurancevalue: damageData.insurancevalue,
                  damage: damageData.damage,
                },
              }));
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="versicherungswert" className="ml-1 mb-1 text-lg">
            Versicherungswert angeben
          </label>
          <input
            type="number"
            name="versicherungswert"
            placeholder="VERSICHERUNGSWERT"
            className="rounded-2xl p-2"
            min={0}
            step={10}
            onChange={(e) => {
              setDamageData((damageData) => ({
                ...damageData,
                ...{
                  id: damageData.id,
                  suminsured: damageData.suminsured,
                  insurancevalue: parseInt(e.target.value),
                  damage: damageData.damage,
                },
              }));
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="schaden" className="ml-1 mb-1 text-lg">
            Schaden angeben
          </label>
          <input
            type="number"
            name="schaden"
            placeholder="SCHADEN"
            className="rounded-2xl p-2"
            min={0}
            step={10}
            onChange={(e) => {
              setDamageData((damageData) => ({
                ...damageData,
                ...{
                  id: damageData.id,
                  suminsured: damageData.suminsured,
                  insurancevalue: damageData.insurancevalue,
                  damage: parseInt(e.target.value),
                },
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DamageCalculatorForm;
