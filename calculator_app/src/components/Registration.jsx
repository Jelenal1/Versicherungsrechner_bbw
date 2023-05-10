import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Navbar from "./Navbar";
function Registration() {
  const styles = {
    heading: `text-3xl text-center mb-3`,
    formcontainer: `flex gap-5 max-w-7xl mx-auto bg-violet-400 rounded-2xl p-2`,
    inputcontainer: `flex flex-col gap-1 items-center p-2 rounded-2xl w-full`,
    label: `ml-1 mb-1 text-lg`,
    inputfield: `rounded-2xl p-2 border-none focus:outline-none w-full`,
  };
  const createUser = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  };

  return (
    <>
      <Navbar />
      <div className="p-2">
        <h1 className={styles.heading}>Sign Up</h1>
        <div className={styles.formcontainer}>
          <form
            className={styles.inputcontainer}
            onSubmit={(e) => {
              e.preventDefault();
              createUser(e.target[0].value, e.target[1].value);
            }}
          >
            <label htmlFor="email">Email</label>
            <input type="email" className={styles.inputfield} />
            <label htmlFor="password">Passwort</label>
            <input type="password" className={styles.inputfield} />
            <input
              type="submit"
              value="submit"
              className="border-2 rounded-xl p-2 mt-1"
            />
          </form>
        </div>
      </div>
    </>
  );
}
export default Registration;
