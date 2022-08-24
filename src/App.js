import './App.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useEffect, useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const [users, setUsers]  = useState([]);
  const[singleUser, setSingleUser] = useState({});
  const[randomUser, setRandomUser] = useState({});

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

    //Single User
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUser(data))

    //Random User
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  },[])

  const handleLike = () =>{
    const color = likeColor ? '' : 'primary';
    setLikeColor(color);
  }
  return (
    <div>
      <AccessAlarmIcon></AccessAlarmIcon><br/>
      <ThumbUpIcon onClick = {handleLike} color = {likeColor}></ThumbUpIcon>
       <h1>Name: {singleUser.name}</h1>
       <h2>Random Name: {randomUser.name && randomUser.name.first}</h2>
       {
        users.map(user => <li>{user.name}</li>)
       }
    </div>
  );
}

export default App;
