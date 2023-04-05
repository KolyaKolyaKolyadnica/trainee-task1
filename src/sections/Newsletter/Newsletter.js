import { useState } from "react";
import style from "./Newsletter.module.css";

function Newsletter() {
  const [email, setEmai] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log(`Submit with email: ${email}`);
    alert(
      `Submit with email: ${email}. Just do smth with me... Just... Do it!`
    );
    setEmai("");
  };
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Newsletter</h2>
        <h4 className={style.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis
          aliquam arcu lacus.
        </h4>

        <form className={style.form} onSubmit={submit}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmai(e.target.value)}
            placeholder="Your email"
            className={style.input}
          />
          <button type="submit" className={style.btn}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
