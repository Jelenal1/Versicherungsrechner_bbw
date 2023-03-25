function DamageCalculatorChart({ calculateDamage }) {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-400 p-5">
      <h2 className="text-xl">So viel übernimmt die Versicherung:</h2>
      <h2>{calculateDamage()}</h2>
    </div>
  );
}
export default DamageCalculatorChart;
