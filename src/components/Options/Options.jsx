import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, total }) => {
  return (
    <div className={s.btns}>
      <button className={s.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={s.btnReset} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
