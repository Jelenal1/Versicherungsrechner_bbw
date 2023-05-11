import { doc, setDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { auth } from "../firebase";

function InsuranceCalculatorItems({ houseItems }) {
  const styles = {
    heading: `text-3xl text-center mb-3`,
    formcontainer: `flex max-w-4xl mx-auto mb-5 bg-violet-400 rounded-2xl`,
    table: `min-w-fit w-full`,
    label: `ml-1 mb-1 text-lg`,
    inputfield: `rounded-2xl p-2 border-none focus:outline-none w-1/2`,
  };

  const setResults = async () => {
    if (auth.currentUser) {
      try {
        await setDoc(doc(db, auth.currentUser.uid + "_calc"), {
          insurancevalue: getValue() + 20,
          insurancesum: getValue(),
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const renderColumn = () =>
    houseItems.map((item) => {
      return (
        <tr key={item.id} className={styles.column}>
          <td>{item.itemname}</td>
          <td>{item.itemvalue}</td>
        </tr>
      );
    });

  const [valueChanged, setValueChanged] = useState();
  const getValue = () => {
    let sum = 0;
    houseItems.forEach((item) => {
      sum = sum + parseInt(item.itemvalue);
    });
    return sum;
    setValueChanged(sum);
  };

  useEffect(() => {
    setResults();
  }, [valueChanged]);
  return (
    <>
      <div className="p-2">
        <div className={styles.formcontainer + " p-3"}>
          <table className={styles.table}>
            <tr key={"headings"}>
              <th className="text-left">Gegegenstandsname</th>
              <th className="text-left">Wert</th>
            </tr>
            {renderColumn()}
          </table>
        </div>
        <div className={styles.formcontainer + " p-5"}>
          <div>
            <div>
              <h2 className="text-lg">Versicherungswert:</h2>
              <h2>{getValue()}</h2>
            </div>
            <div>
              <h2 className="text-lg">Versicherungssumme:</h2>
              <h2>{getValue() ? getValue() + 20 : getValue()}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default InsuranceCalculatorItems;
