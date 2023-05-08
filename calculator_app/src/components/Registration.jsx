import { auth } from "../firebase";
function Registration() {
  const styles = {
    heading: `text-3xl text-center mb-3`,
    formcontainer: `flex gap-5 max-w-7xl mx-auto bg-violet-400 rounded-2xl p-2`,
    inputcontainer: `flex gap-1 items-center p-2 rounded-2xl w-full`,
    label: `ml-1 mb-1 text-lg`,
    inputfield: `rounded-2xl p-2 border-none focus:outline-none w-1/2`,
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
    <div className="p-2">
      <h1 className={styles.heading}>Sign Up</h1>
      <div className={styles.formcontainer}>
        <div className={styles.inputcontainer}>
          <input type="email" className={styles.inputfield} />
          <input type="password" className={styles.inputfield} />
        </div>
      </div>
    </div>
  );
}
export default Registration;
