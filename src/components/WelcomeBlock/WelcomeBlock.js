import style from "./WelcomeBlock.module.css";

function WelcomeBlock() {
  return (
    <>
      <div className={style.welcomeBlock}>
        <h1 className={style.title}>Chase Your Dream with us</h1>
        <h4 className={style.subtitle}>
          The harder you work for something, the greater you’ll feel when you
          achieve it.
        </h4>
        <div className={style.btnGroup}>
          <button type="button" className={style.btn}>
            <span className={style.btnText}>Apply Online</span>
          </button>
          <button type="button" className={style.secondBtn}>
            <span className={style.secondBtnText}>Loan Caclulator</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default WelcomeBlock;
