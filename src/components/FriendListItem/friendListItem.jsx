import { FriendItem, Image, NameFriend, Status } from './friendListItem.styled';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <FriendItem>
      <Status $status={isOnline.toString()}></Status>
      <Image src={avatar} alt={name}></Image>
      <NameFriend>{name}</NameFriend>
    </FriendItem>
  );
};
