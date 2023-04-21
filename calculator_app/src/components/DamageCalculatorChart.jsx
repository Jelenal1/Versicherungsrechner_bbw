function DamageCalculatorChart({ calculateDamage }) {
  return (
    <div className="bg-violet-400 p-5 rounded-2xl max-w-7xl mx-auto">
      <h2 className="text-xl">So viel übernimmt die Versicherung:</h2>
      <h2>{calculateDamage()}</h2>
    </div>
  );
}
export default DamageCalculatorChart;
