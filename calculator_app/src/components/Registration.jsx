import { auth } from "../firebase";
import Navbar from "./Navbar";
function Registration() {
  const styles = {
    heading: `text-3xl text-center mb-3`,
    formcontainer: `flex gap-5 max-w-7xl mx-auto bg-violet-400 rounded-2xl p-2`,
    inputcontainer: `flex flex-col gap-1 items-center p-2 rounded-2xl w-full`,
    label: `ml-1 mb-1 text-lg`,
    inputfield: `rounded-2xl p-2 border-none focus:outline-none w-full`,
  };
  const createUser = async () => {
    const userCredential = await createUserWithEmailAndPasswort(
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
          <div className={styles.inputcontainer}>
            <label htmlFor="email">Email</label>
            <input type="email" className={styles.inputfield} />
            <label htmlFor="password">Passwort</label>
            <input type="password" className={styles.inputfield} />
            <button className="border-2 p-2 mt-2 rounded-xl">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Registration;
