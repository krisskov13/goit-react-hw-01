import css from "./FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = clsx(css.title, isOnline ? css.online : css.offline);
  return (
    <div>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.title}>{name}</p>
      <p className={status}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
