import ipdc from "../../images/ipdc.png";
import style from "./IpdcSection.module.css";

function IpdcSection() {
  return (
    <div className={style.container}>
      <img
        src={ipdc}
        alt="a-branch-sprouts-from-50-euros"
        className={style.image}
      />
      <div className={style.textArea}>
        <div className={style.info}>
          <div className={style.textContainer}>
            <h2 className={style.title}>IPDC AT A GLANCE</h2>
            <p className={style.text}>
              IPDC Finance Limited (previously known as "Industrial Promotion
              and Development Company of Bangladesh Limited") is the first
              private sector financial institution of the country established in
              1981 by a distinguished group of shareholders namely International
              Finance Corporation (IFC), USA, German Investment and Development
              Company (DEG), Germany, The Aga Khan Fund for Economic Development
              (AKFED), Switzerland, Commonwealth Development Corporation (CDC),
              UK and the Government of Bangladesh
            </p>
          </div>

          <div className={style.linkContainer}>
            <a href="#" className={style.link}>
              Read more
              <span className={style.svgContainer}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4033 7.04065C14.3458 6.89233 14.2596 6.75682 14.1496 6.6419L8.10792 0.600234C7.99525 0.487571 7.8615 0.398202 7.7143 0.337229C7.5671 0.276256 7.40933 0.244873 7.25 0.244873C6.92822 0.244873 6.61962 0.3727 6.39208 0.600234C6.27942 0.712897 6.19005 0.846648 6.12908 0.993849C6.0681 1.14105 6.03672 1.29882 6.03672 1.45815C6.03672 1.77993 6.16455 2.08853 6.39208 2.31607L10.3796 6.29148H1.20833C0.887863 6.29148 0.580519 6.41879 0.353913 6.6454C0.127306 6.872 0 7.17935 0 7.49982C0 7.82029 0.127306 8.12763 0.353913 8.35424C0.580519 8.58084 0.887863 8.70815 1.20833 8.70815H10.3796L6.39208 12.6836C6.27883 12.7959 6.18894 12.9295 6.12759 13.0768C6.06624 13.224 6.03466 13.382 6.03466 13.5415C6.03466 13.701 6.06624 13.8589 6.12759 14.0062C6.18894 14.1534 6.27883 14.2871 6.39208 14.3994C6.50441 14.5127 6.63806 14.6025 6.7853 14.6639C6.93255 14.7252 7.09049 14.7568 7.25 14.7568C7.40951 14.7568 7.56745 14.7252 7.7147 14.6639C7.86194 14.6025 7.99559 14.5127 8.10792 14.3994L14.1496 8.35773C14.2596 8.24282 14.3458 8.10731 14.4033 7.95898C14.5242 7.6648 14.5242 7.33483 14.4033 7.04065Z"
                    fill="#ED017F"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IpdcSection;
