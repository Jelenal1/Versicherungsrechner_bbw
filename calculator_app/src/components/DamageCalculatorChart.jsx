function DamageCalculatorChart({
  calculateDamage,
  calculatePercent,
  underOrOverInsured,
}) {
  return (
    <div className="p-2">
    <div className="bg-violet-400 p-5 rounded-2xl max-w-7xl mx-auto">
      <div className="mb-3">
        <h2 className="text-xl">So viel übernimmt die Versicherung:</h2>
        <h2>{calculateDamage()}</h2>
      </div>
      <div className="mb-3">
        <h2 className="text-xl">Das ist die Schadensabdeckung prozentual:</h2>
        <h2>{calculatePercent() + "%"}</h2>
      </div>
      <div className="mb-3">
        <h2 className="text-xl text-red-500">{underOrOverInsured()}</h2>
      </div>
    </div>
    </div>
  );
}
export default DamageCalculatorChart;
