import { useState } from "react";
import InsuranceCalculatorInputForm from "./InsuranceCalculatorInputForm";
import Navbar from "./Navbar";
import InsuranceCalculatorItems from "./InsuranceCalculatorItems";
import { collection, onSnapshot, query } from "firebase/firestore";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function InsuranceCalculator() {
  const [houseItems, setHouseItems] = useState([]);

  function getData() {
    if (auth.currentUser) {
      const q = query(collection(db, auth.currentUser.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setHouseItems(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
      return unsubscribe;
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user) getData();
  });
  return (
    <>
      <Navbar />
      <InsuranceCalculatorInputForm
        setHouseItems={setHouseItems}
        getData={getData}
      />
      <InsuranceCalculatorItems houseItems={houseItems} />
    </>
  );
}
export default InsuranceCalculator;
