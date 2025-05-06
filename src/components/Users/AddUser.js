// Write your code below:
import React, {useState} from "react";
import Card from "../UI/Card";
import './AddUser.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState('');
  const [enteredAge, setAge] = useState('')
  const [error, setError] = useState();

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      id:Math.random().toString(),
      name: enteredUsername,
      age:enteredAge
    }
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
    {
      setError({title:"Invalid Input", message:"Please enter a valid username and age (non empty string)."});
      return 
    }
    if(Number(enteredAge)<1)
    {
      setError({title:"Invalid Input", message:"Please enter a valid age(>0)"})
      return 
    }
    return props.onSaveUser(enteredData);
    setUsername('')
    setAge('')
  }
  const errorHandler=()=>{
    setError(null);
  }
  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConform={errorHandler}/>}
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
        <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
    </div>
  )
}

export default AddUser;