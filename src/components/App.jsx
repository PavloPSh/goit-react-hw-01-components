import user from './profile/user';
import data from './stats/data';
import friends from './friendList/friends'
import transactions from './transaction/transactions'

import { Profile } from './profile/Profile';
import { Statistics } from './stats/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transaction/TransactionHistory';

import { GlobalStyle } from './GlobalStyles';
import { Box } from 'Box';


export const App = () => {
  return (
    <Box
      as='main'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      bg='mainBg'>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats} 
        />

        <Statistics stats={data} />

        <FriendList friends={friends} />
        
        <TransactionHistory items={transactions} />
      
        <GlobalStyle />

    </Box>
  );
};


