import { useState } from "react";
import styles from "./UseState.module.css";

function UseState() {
  const password = "swordfish";
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); // prevents form refresh
    const enteredPassword = e.target.querySelector(
      'input[type="password"]'
    ).value;
    const auth = enteredPassword === password;
    setAuthorized(auth);
  }

  const login = (
    <form onSubmit={handleSubmit}>
      <input type="password" placeholder="Password" />
      <input type="submit" value="Submit" />
    </form>
  );

  const contactInfo = (
    <ul>
      <li>Micheal@Jordan.com</li>
      <li>999.666.999</li>
    </ul>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>{authorized ? "Contact" : "Enter the Password"}</h1>
          {authorized ? contactInfo : login}
        </div>
      </div>
    </div>
  );
}

export default UseState;
