// Write your code below:
import React, {useState} from "react";
import Card from "../UI/Card";
import './AddUser.css'

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState('');
  const [enteredAge, setAge] = useState('')

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      username: enteredUsername,
      age:enteredAge
    }
   console.log(enteredData)
    setUsername('')
    setAge('')
  }
  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <div >
          <label  htmlFor="username">Username</label>
          <input  type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}/>
        </div>
        <div>
          <label  htmlFor="age">Age</label>
          <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>   
        </div>
        <div>
        <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  )
}

export default AddUser;