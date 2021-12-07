import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li className={s.item}>
        <span className={isOnline ? s.on : s.off}>{isOnline}</span>
        <img className={s.avatar} src={avatar} alt="" width="48" />
        <p className={s.name}>{name}</p>
      </li>
    </>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
