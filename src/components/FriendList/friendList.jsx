import { FriendListItem } from 'components/FriendListItem/FriendListItem.jsx';
import { FriendListEl } from './friendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListEl data={friends}>
      {friends.map(({ avatar, id, isOnline, name }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </FriendListEl>
  );
};
