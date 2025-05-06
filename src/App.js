import React, {useState} from "react";
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const saveUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    })
  }
  return (
    <div className="App">
      <AddUser onSaveUser={saveUserHandler} />
      <UsersList users={users}/>
    </div>
  );
}

export default App;


