import React from "react";
import './UsersList.css';

const UsersList= (props)=>{
    return (
        <div className="users">
            <ul>
                {props.users.map((user)=>{
                    return (
                        <li key={user.id}>{user.name}({user.age} years old)</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UsersList;