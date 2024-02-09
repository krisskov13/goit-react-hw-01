import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={image} alt="Avatar" />
        <p className={css.user}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.ul}>
        <li className={css.li}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.li}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.li}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
