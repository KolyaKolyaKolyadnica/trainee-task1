import style from "./PartnersList.module.css";
import etv from "../../images/partner-etv.png";
import holcim from "../../images/partner-holcim.png";
import summit from "../../images/partner-summit.png";
import westin from "../../images/partner-westin.png";

function PartnersList() {
  return (
    <ul className={style.list}>
      <li className={style.listItem}>
        <div className={style.imgContainer}>
          <img src={westin} alt="Westin" className={style.image} />
        </div>
      </li>
      <li className={style.listItem}>
        <div className={style.imgContainer}>
          <img src={summit} alt="Summit" className={style.image} />
        </div>
      </li>
      <li className={style.listItem}>
        <div className={style.imgContainer}>
          <img src={holcim} alt="Holcim" className={style.image} />
        </div>
      </li>
      <li className={style.listItem}>
        <div className={style.imgContainer}>
          <img src={etv} alt="ETV" className={style.image} />
        </div>
      </li>
    </ul>
  );
}
export default PartnersList;
