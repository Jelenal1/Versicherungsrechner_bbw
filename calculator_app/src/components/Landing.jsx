import Navbar from "./Navbar";

function Landing() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-purple-600 to-blue-400 min-h-screen flex flex-col">
        <h1 className="text-3xl mx-auto">Landing Page</h1>
        <div className="p-5 flex gap-3 justify-center">
          <div className="p-4 text-xl rounded-xl bg-[#ffffff3f] w-1/2 flex flex-col">
            <h2 className="text-2xl text-center font-bold mb-2">
              Schadensrechner
            </h2>
            Unser Schadensrechner berechnet zuverlässig die Schadenssumme,
            welche die Versicherung zahlen wird. Wenn sie ihren Hauswert, bzw
            Versicherungswert nicht wissen gibt es auch die möglichkeit diesen
            Schritt für Schritt zu berechnen.
            <button className="border-2">Go!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
