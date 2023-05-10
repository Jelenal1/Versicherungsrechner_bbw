import { BsFillCalculatorFill, BsHouseDoorFill } from "react-icons/bs";
import { FaCalculator, FaHouseDamage, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const styles = {
    spaceleft: `ml-5`,
    icons: `w-8 h-8`,
    pills: `ml-2 flex items-center bg-violet-200 p-2 rounded-xl`,
    pillstext: `ml-2`,
  };

  const navigate = useNavigate();

  return (
    <div className="p-2 flex items-center gap-2 h-20 bg-violet-300 border-b-2 border-black">
      <div
        className="flex items-center cursor-pointer border-t-2 border-b-2 border-black"
        onClick={() => {
          navigate("/");
        }}
      >
        <h1 className="text-lg my-2">Lorem Company</h1>
      </div>
      <button
        className={styles.pills}
        onClick={() => {
          navigate("/");
        }}
      >
        <BsHouseDoorFill className={styles.icons} />
        <h2 className={styles.pillstext}>Home</h2>
      </button>
      <button
        className={styles.pills}
        onClick={() => {
          navigate("/damagecalculator");
        }}
      >
        <FaHouseDamage className={styles.icons} />
        <h2 className={styles.pillstext}>Schadensrechner</h2>
      </button>
      <button
        className={styles.pills}
        onClick={() => {
          navigate("/insurancecalculator");
        }}
      >
        <FaCalculator className={styles.icons} />
        <h2 className={styles.pillstext}>Versicherungssumme</h2>
      </button>
      <button
        className="flex items-center bg-violet-200 p-2 rounded-xl ml-auto"
        onClick={() => {
          navigate("/signin");
        }}
      >
        <FaUserPlus className={styles.icons} />
        <h2 className={styles.pillstext}>Sign In</h2>
      </button>
    </div>
  );
}
export default Navbar;
