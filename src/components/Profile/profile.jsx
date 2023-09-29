import user from 'user.json'
import { Avatar, ContainerUser, Description, ElemStats, Label, Name, Quantity, Stats, Tag } from './profile.styled.js';

console.log(user);
export const ProfileUser = () => {
   
    const { username, tag, location, avatar, stats } = user
    console.log(stats.followers);
    return <ContainerUser>
  <Description>
    <Avatar
                src={avatar }
                alt={username }
      />
            <Name>{ username}</Name>
            <Tag>{ tag}</Tag>
            <Tag>{ location}</Tag>
  </Description>

  <Stats>
    <ElemStats>
      <Label >Followers</Label>
      <Quantity >{stats.followers}</Quantity>
    </ElemStats>
    <ElemStats>
      <Label >Views</Label>
      <Quantity >{stats.views}</Quantity>
    </ElemStats>
    <ElemStats>
      <Label >Likes</Label>
                <Quantity >{ stats.likes}</Quantity>
    </ElemStats>
  </Stats>
</ContainerUser>


 }

 ProfileUser(user)