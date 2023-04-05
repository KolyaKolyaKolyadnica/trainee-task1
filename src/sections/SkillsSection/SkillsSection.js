import style from "./SkillsSection.module.css";
import cards from "./cards";

function SkillsSection() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>
        Creating Extraordinary Customer Experience
      </h2>
      <h4 className={style.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum
        eget morbi dignissim eu pharetra consequat montes, sagittis.
      </h4>

      <ul className={style.list}>
        {cards.map((card) => (
          <li className={style.listItem} key={card.title}>
            <span className={style.svgContainer}>{card.svg}</span>
            <h3 className={style.cardTitle}>{card.title}</h3>
            <h4 className={style.cardSubtitle}>{card.subtitle}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsSection;
