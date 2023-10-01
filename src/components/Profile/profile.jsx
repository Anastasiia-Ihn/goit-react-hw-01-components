import {
  ContainerUser,
  Description,
  Avatar,
  Name,
  Tag,
  ElemStats,
  Label,
  Quantity,
  Stats,
} from './profile.styled.js';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <ContainerUser>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Tag>{location}</Tag>
      </Description>
      <Stats>
        <ElemStats>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ElemStats>
        <ElemStats>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ElemStats>
        <ElemStats>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ElemStats>
      </Stats>
    </ContainerUser>
  );
};
