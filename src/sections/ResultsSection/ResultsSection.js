import style from "./ResultsSection.module.css";

function ResultsSection() {
  const results = [
    {
      record: "57.6 bn",
      achievement: "LOAN PORTFOLIO",
    },
    {
      record: "0.95%",
      achievement: "CLASSIFIED LOAN PORTFOLIO",
    },
    {
      record: "388.5%",
      achievement: "CLASSIFIED LOAN Coverage",
    },
    {
      record: "50.4 bn",
      achievement: "Deposit",
    },
    {
      record: "6.1 bn",
      achievement: "Shareholders equity",
    },
    {
      record: "18.51%",
      achievement: "Capital Adequacy Ratio",
    },
    {
      record: "8.5 bn",
      achievement: "Market Capitalization",
    },
    {
      record: "AAA",
      achievement: "Credit Rating",
    },
  ];

  return (
    <div className={style.container}>
      <h2 className={style.title}>Our best results for the year</h2>
      <h4 className={style.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
        mattis vel feugiat erat tortor eleifend.
      </h4>

      <ul className={style.results}>
        {results.map((result, idx) => (
          <li className={style.result} key={idx}>
            <p className={style.record}>{result.record}</p>
            <p className={style.achievement}>{result.achievement}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsSection;
