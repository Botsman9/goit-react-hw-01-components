import Profile from "./components/Profile/Profile.jsx";
import user from "./components/Profile/user.json";

import Statistic from "./components/Statistics/Statistic.jsx";
import statisticalData from "./components/Statistics/statistical-data.json";

import FriendList from "./components/FriendList/FriendList.jsx";
import friends from "./components/FriendList/friends.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./components/TransactionHistory/transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      ,
      <Statistic title="Upload stats" stats={statisticalData} />,
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />,
    </div>
  );
}
