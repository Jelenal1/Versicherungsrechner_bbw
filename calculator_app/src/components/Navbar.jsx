import { BsFillCalculatorFill, BsHouseDoorFill } from "react-icons/bs";
import { FaHouseDamage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const styles = {
    spaceleft: `ml-5`,
    icons: `w-8 h-8`,
  };

  const navigate = useNavigate();

  return (
    <div className="p-2 flex gap-2 h-20 bg-violet-300 border-b-2 border-black">
      <div
        className="flex items-center"
        onClick={() => {
          navigate("/");
        }}
      >
        <BsFillCalculatorFill className={styles.icons} />
        <h1 className="text-lg">Lorem</h1>
      </div>
      <button
        className="ml-1"
        onClick={() => {
          navigate("/");
        }}
      >
        <BsHouseDoorFill className={styles.icons} />
      </button>
      <button
        className="ml-7"
        onClick={() => {
          navigate("/damagecalculator");
        }}
      >
        <FaHouseDamage className={styles.icons} />
      </button>
    </div>
  );
}
export default Navbar;
