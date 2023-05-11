import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { BsHouseCheck } from "react-icons/bs";

function InsuranceCalculatorInputForm({ setHouseItems, getData }) {
  const styles = {
    heading: `text-3xl text-center mb-3`,
    formcontainer: `flex gap-5 max-w-4xl mx-auto bg-violet-400 rounded-2xl p-2`,
    inputcontainer: `flex gap-1 items-center p-2 rounded-2xl w-full`,
    label: `ml-1 mb-1 text-lg`,
    inputfield: `rounded-2xl p-2 border-none focus:outline-none w-1/2`,
  };
  const [name, setName] = useState();
  const [value, setValue] = useState();

  const additem = async () => {
    if (auth.currentUser) {
      try {
        await addDoc(collection(db, auth.currentUser.uid), {
          itemname: name,
          itemvalue: value,
        });
      } catch (error) {
        console.log(error);
      }

      getData();
    } else {
      setHouseItems((items) => [
        ...items,
        {
          id: items.length + 1,
          itemname: name,
          itemvalue: value,
        },
      ]);
    }
  };
  return (
    <div className="p-2">
      <h1 className={styles.heading}>Versicherungssummenrechner</h1>
      <div className={styles.formcontainer}>
        <div className={styles.inputcontainer}>
          <label htmlFor="gegenstand" className={styles.label}>
            Gegenstandsname
          </label>
          <input
            type="text"
            name="gegenstand"
            className={styles.inputfield}
            onKeyDown={(e) => (e.key == "Enter" ? additem() : null)}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="wert" className={styles.label}>
            Wert
          </label>
          <input
            type="number"
            name="wert"
            className={styles.inputfield}
            onKeyDown={(e) => (e.key == "Enter" ? additem() : null)}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="ml-2" onClick={(e) => additem()}>
            <FaRegCheckCircle className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InsuranceCalculatorInputForm;
