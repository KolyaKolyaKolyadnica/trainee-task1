import BigWhiteButton from "../BigWhiteButton/BigWhiteButton";

import style from "./BgiBlock.module.css";

function BgiBlock() {
  return (
    <div className={style.container}>
      <div className={style.img}></div>
      <BigWhiteButton image={"car"} />
      <BigWhiteButton image={"home"} />

      <ul className={style.pagination}>
        <li className={style.curPage}></li>
        <li className={style.page}></li>
        <li className={style.page}></li>
        <li className={style.page}></li>
      </ul>
    </div>
  );
}

export default BgiBlock;
