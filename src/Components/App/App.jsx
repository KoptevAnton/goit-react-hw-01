import Profile from '../Profile/Profile';
import FriendList from '../../FriendList/FriendList';
import userData from '../../userData.json';
import friends from '../../friends.json';
import css from './App.module.css';



export default function App() {
  return (
    <div className={css.container}>
      <Profile userProfile={userData} />
      <FriendList friends={friends} />
    </div>
  );
}
