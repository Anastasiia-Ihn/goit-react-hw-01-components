import { FriendListItem } from './FriendListItem/friendListItem.jsx'
import {FriendListEl} from './friendList.styled.js'

export const FriendList = ({friends}) => {
    // console.log(props);
    return  <FriendListEl data={friends}>
        {friends.map(({avatar, id, isOnline, name}) => 
                    <FriendListItem key = {id} avatar={avatar} isOnline = {isOnline} name = {name} ></FriendListItem>

        )}
    </FriendListEl>
}