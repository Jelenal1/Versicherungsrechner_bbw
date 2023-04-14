import { BsFillCalculatorFill, BsHouseDoorFill } from "react-icons/bs";
import { FaHouseDamage } from "react-icons/fa";

function Navbar() {
  const styles = {
    spaceleft: `ml-5`,
    icons: `w-8 h-8`,
  };
  return (
    <div className="p-2 flex gap-2 h-20 bg-gradient-to-r from-purple-600 to-blue-400 border-b-2 border-black">
      <div className="flex items-center">
        <BsFillCalculatorFill className={styles.icons} />
        <h1 className="text-lg">Lorem</h1>
      </div>
      <button className="ml-1">
        <BsHouseDoorFill className={styles.icons} />
      </button>
      <button className="ml-7">
        <FaHouseDamage className={styles.icons} />
      </button>
    </div>
  );
}
export default Navbar;
