import "./PreFooter.scss";
const PreFooter = () => {
  return (
    <div className="prefooter__section">
      <p className="prefooterPara">
        <sup>1</sup> GoPro subscription available in select territories. Cancel anytime. See
        <a> terms + conditions </a>for more details.
      </p>
      <p className="prefooterPara">
      <sup>2</sup> Applies only to purchases made on GoPro.com. Some accessories excluded.
      <a> Learn more</a>. Limited to a maximum of 10 items per subscription
      anniversary year.
      </p>
      <p className="prefooterPara">
      <sup>3</sup> Exchange up to two cameras per year for the same model (GoPro Fusion and
      HERO5 or later). Fees apply. Available in <a> these countries only</a>.
      </p>
    </div>
  );
};

export default PreFooter;
