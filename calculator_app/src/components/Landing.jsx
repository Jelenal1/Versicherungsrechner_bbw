import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-2">
        <h1 className="text-3xl mx-auto">Landing Page</h1>
        <div className="p-4 flex gap-3 justify-center">
          <div className="p-4 text-xl rounded-xl bg-violet-400 w-1/2 flex flex-col">
            <h2 className="text-2xl text-center font-bold mb-2">
              Schadensrechner
            </h2>
            Unser Schadensrechner berechnet zuverlässig die Schadenssumme,
            welche die Versicherung zahlen wird. Wenn sie ihren Hauswert, bzw
            Versicherungswert nicht wissen gibt es auch die möglichkeit diesen
            Schritt für Schritt zu berechnen.
            <button className="border-2 w-16 p-1 mx-auto mt-1 rounded-xl"
            onClick={()=> navigate("/damagecalculator")}
            >
              Go!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
