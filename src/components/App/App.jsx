import { Profile } from '../Profile/Profile';
import { Statistic } from 'components/Statistic/Statistic';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from '../../data/user';
import friends from '../../data/friends';
import data from '../../data/data';
import transactions from '../../data/transactions';
import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Wrapper>
  );
};
