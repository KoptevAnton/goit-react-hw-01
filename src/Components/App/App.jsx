import Profile from '../Profile/Profile';
import userData from '../../userData.json';
import './App.css';

export default function App() {
  return (
    <div>
      <Profile userProfile={userData} />
    </div>
  );
}
