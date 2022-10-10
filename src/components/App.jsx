import user from './profile/user';
import data from './stats/data';
import friends from './friendList/friends'

import { Profile } from './profile/Profile';
import { Statistics } from './stats/Statistics';
import { FriendList } from './friendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} 
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
      
    </div>
  );
};


