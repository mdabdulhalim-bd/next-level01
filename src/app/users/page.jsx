import React from 'react';
import {getUsers} from '../../services/usersApi.js'

const UsersPage = async() => {
    const users = await getUsers(); // Replace with actual fetching users logic from API
    console.log(users);
    
    return (
        <div>
            <h1 className="text-2xl text-center">This is user page ?</h1>
            {
                users?.map(({id, email, address,name}) =>(<div key={id}>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>{address?.city}</p>
                </div>))
            }
        </div>
    );
};

export default UsersPage;

