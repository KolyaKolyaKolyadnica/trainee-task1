import PhoneNumber from "../../components/PhoneNumber/PhoneNumber";
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks";
import style from "./FooterSection.module.css";

function FooterSection() {
  return (
    <footer className={style.footer}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <h3 className={style.listItemTitle}>About the company</h3>
          <p className={style.listItemText}>
            Learn To Love Growth And Change And You Will Be A Success. Microsoft
            Patch
          </p>

          <SocialNetworks />
        </li>

        <li className={style.listItem}>
          <h3 className={style.listItemTitle}>Products</h3>
          <ul className={style.subList}>
            <li className={style.subListItem}>CSR Activities</li>
            <li className={style.subListItem}>Green Banking</li>
            <li className={style.subListItem}>News</li>
            <li className={style.subListItem}>Ongoing Campgain</li>
            <li className={style.subListItem}>Updates</li>
          </ul>
        </li>

        <li className={style.listItem}>
          <h3 className={style.listItemTitle}>Get Started</h3>
          <ul className={style.subList}>
            <li className={style.subListItem}>Career</li>
            <li className={style.subListItem}>Contact Us</li>
            <li className={style.subListItem}>Government Securities</li>
            <li className={style.subListItem}>Examples</li>
            <li className={style.subListItem}>NIS</li>
          </ul>
        </li>

        <li className={style.listItem}>
          <h3 className={style.listItemTitle}>About</h3>
          <ul className={style.subList}>
            <li className={style.subListItem}>IPDC at a Glance</li>
            <li className={style.subListItem}>Mission, VIsion & Values</li>
            <li className={style.subListItem}>Corporate Governanace</li>
            <li className={style.subListItem}>Shareholders</li>
            <li className={style.subListItem}>Investor Relations</li>
          </ul>
        </li>
      </ul>

      <div className={style.phoneContainer}>
        <PhoneNumber />
      </div>
    </footer>
  );
}

export default FooterSection;
