import BgiBlock from "../../components/BgiBlock/BgiBlock";
import Header from "../../components/Header/Header";
import PhoneNumber from "../../components/PhoneNumber/PhoneNumber";
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks";
import WelcomeBlock from "../../components/WelcomeBlock/WelcomeBlock";

import style from "./StartSection.module.css";

function StartSection() {
  return (
    <div className={style.container}>
      <Header />

      <div className={style.content}>
        <WelcomeBlock />

        <div className={style.contacts}>
          <PhoneNumber />

          <div className={style.verticalLine}></div>

          <SocialNetworks />
        </div>
      </div>
      <BgiBlock />
    </div>
  );
}

export default StartSection;
