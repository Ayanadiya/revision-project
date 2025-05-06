import React, {useState} from "react";
import AddUser from './components/Users/AddUser'

function App() {
  const [users, setUsers] = useState([])
  const saveUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    })
  }
  return (
    <div>
      <AddUser onSaveUser={saveUserHandler} />
    </div>
  );
}

export default App;


