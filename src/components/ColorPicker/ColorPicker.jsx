import s from "./ColorPicker.module.css";
import colors from "../../assets/colors.json";

export const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("white");
  return (
    <section className={s.bgWrapper}>
      <div className={s.pallette}>
        <h2>Current color: {currenColor}</h2>
        <ul className={s.list}>
          {colors.map((item) => (
            <li key={item.id} className={s.item}>
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default ColorPicker;
