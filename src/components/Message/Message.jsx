import s from "./Message.module.css";
import clsx from "clsx";

const Message = ({ author = "Incognito", text, isOnline = false }) => {
  return (
    <div>
      <h3 className={s.title}>{author}</h3>
      {isOnline ? (
        <h6 className={clsx(s.status, s.green)}>Online</h6>
      ) : (
        <h6 className={clsx(s.status, s.red)}>Offline</h6>
      )}
      {isOnline && <h4>Write</h4>}

      {/* <h6 className={`${s.status} ${s.green}`}>Online</h6>
      <h6 className={`${s.status} ${s.red}`}>Offline</h6> */}
      {/* <h7>Hello World</h7> */}
      <p className={clsx(text.length > 10 && s.alert)}>{text}</p>
    </div>
  );
};

export default Message;
