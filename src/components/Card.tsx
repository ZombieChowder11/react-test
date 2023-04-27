import React from 'react';

import './Card.css';
import { User } from './userType';

type IProps={
    user: User
    deleteUserFn: (id:string)=>void
}
const Card = ({user, deleteUserFn}:IProps) => {
    return (
        <div className="card">
            <div className="id"> {user.id}</div>
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
            <button onClick={(e)=>deleteUserFn(user.id)}>Delete me</button>
        </div>
    )
}

export default Card;