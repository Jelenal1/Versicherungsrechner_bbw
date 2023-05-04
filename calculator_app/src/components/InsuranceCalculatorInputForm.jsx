import { FaRegCheckCircle } from "react-icons/fa";

function InsuranceCalculatorInputForm() {
  const styles = {
    heading: `text-3xl text-center mb-3`,
    formcontainer: `flex gap-5 max-w-7xl mx-auto bg-violet-400 rounded-2xl p-2`,
    inputcontainer: `flex gap-1 items-center p-2 rounded-2xl w-full`,
    label: `ml-1 mb-1 text-lg`,
    inputfield: `rounded-2xl p-2 border-none focus:outline-none w-1/2`,
  };
  return (
    <div className="p-2">
      <h1 className={styles.heading}>Versicherungssummenrechner</h1>
      <div className={styles.formcontainer}>
        <div className={styles.inputcontainer}>
          <label htmlFor="gegenstand" className={styles.label}>
            Gegenstandsname
          </label>
          <input type="text" name="gegenstand" className={styles.inputfield} />
          <label htmlFor="wert" className={styles.label}>
            Wert
          </label>
          <input type="number" name="wert" className={styles.inputfield} />
          <button className="ml-2">
            <FaRegCheckCircle className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InsuranceCalculatorInputForm;
