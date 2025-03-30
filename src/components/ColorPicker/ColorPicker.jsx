import s from "./ColorPicker.module.css";
import colors from "../../assets/colors.json";
import { useState } from "react";

export const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("white");
  return (
    <section className={s.bgWrapper}>
      <div className={s.pallette}>
        <h2 className={s.titlePallette}>Current color: {currentColor}</h2>
        <ul className={s.list}>
          {colors.map((item) => (
            <li
              style={{ backgroundColor: currentColor }}
              onClick={() => setCurrentColor(item.color)}
              key={item.id}
              className={s.item}>
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default ColorPicker;
