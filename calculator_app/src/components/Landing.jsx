import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-2">
        <h1 className="text-3xl mx-auto">Landing Page</h1>
        <div className="p-4">
          <div className="p-4 text-xl rounded-xl bg-violet-400 w-full flex flex-col">
            <h2 className="text-2xl text-center font-bold mb-2">Account</h2>
            <p className="text-center">
              Mit einem Account haben Sie den Vorteil nicht immer alles neu
              ausfüllen zu müssen! Machen Sie sich einen Account und profitieren
              Sie!
            </p>
            <button
              className="border-2 w-24 p-2 mx-auto mt-1 rounded-xl"
              onClick={() => navigate("/signup")}
            >
              Sign Up!
            </button>
          </div>
        </div>
        <div className="p-4 flex gap-3">
          <div className="p-4 text-xl rounded-xl bg-violet-400 max-w-4xl w-1/2 flex flex-col flex-wrap">
            <h2 className="text-2xl text-center font-bold mb-2">
              Schadensrechner
            </h2>
            <p className="text-center">
              Unser Schadensrechner berechnet zuverlässig die Schadenssumme,
              welche die Versicherung zahlen wird. Geben sie einfach Ihre
              Versicherungssumme an, Ihren Versicherungswert und den Schaden,
              schon geht es los. Der Rechner warnt Sie auch vor unter oder über
              Verischerungen. Falls Sie nicht die optimale Versicherungssumme
              gewählt haben, schauen Sie doch mal bei unserem
              Versicherungssummenrechner vorbei.
            </p>
            <button
              className="border-2 w-16 p-1 mx-auto mt-1 rounded-xl"
              onClick={() => navigate("/damagecalculator")}
            >
              Go!
            </button>
          </div>
          <div className="p-4 text-xl rounded-xl bg-violet-400 max-w-4xl w-1/2 flex flex-col">
            <h2 className="text-2xl text-center font-bold mb-2">
              Versicherungssummenrechner
            </h2>
            <p className="text-center">
              Sie kennen Ihre Versicherungssumme nicht? Kein Problem! <br /> Mit
              unserem Versicherungssummenrechner können sie ihre
              Versicherungssumme kürze Ausrechnen in dem Sie einfach all ihr
              Inventar angeben. So haben Sie auch immer einen Überblick über
              Ihren Haushalt.
            </p>
            <button
              className="border-2 w-16 p-1 mx-auto mt-1 rounded-xl"
              onClick={() => navigate("/damagecalculator")}
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
