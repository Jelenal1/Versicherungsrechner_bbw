function DamageCalculatorForm() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-400 p-5">
      <div className="flex flex-col gap-5 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <label htmlFor="versicherungssumme" className="ml-1 mb-1 text-lg">
            Versicherungssumme angeben
          </label>
          <input
            type="number"
            name="versicherungssumme"
            placeholder="VERSICHERUNGSSUMME"
            className="rounded-2xl p-2"
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
          />
        </div>
      </div>
    </div>
  );
}

export default DamageCalculatorForm;
