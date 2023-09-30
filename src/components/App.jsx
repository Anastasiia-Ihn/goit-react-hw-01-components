import { ProfileUser } from "./Profile/profile";
import { Statistics} from './Statistics/statistics'

import user from 'user.json'
import data from 'data.json';


export const App = () => {
  return <>
    <ProfileUser
     username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
      stats={user.stats} />
    
<Statistics title="Upload stats" stats={data} />
{/* <Statistics stats={data} />   */}
  </>
};
