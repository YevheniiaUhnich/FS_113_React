import { useEffect, useState } from "react";
import s from "./Counter.module.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log(`лічильник запущено`);
  }, []);

  useEffect(() => {
    console.log(`лічильник оновлено! Нове значення: ${counter}`);
  }, [counter]);

  const handlePlusClick = () => {
    setCounter(counter + step);
    // console.log(counter);
  };

  const handleMinusClick = () => {
    setCounter(counter - step);
  };
  const handleResetClick = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1 className={s.counterText}>{counter}</h1>
        <input
          value={step}
          type="number"
          onChange={(e) => setStep(+e.target.value)}
        />
        <div className={s.flex}>
          <button onClick={handleMinusClick} className={s.btn}>
            minus
          </button>
          <button onClick={handleResetClick} className={s.btn}>
            reset
          </button>
          <button onClick={handlePlusClick} className={s.btn}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
