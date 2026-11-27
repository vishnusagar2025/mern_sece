import React, { useState, useEffect } from 'react'


function User(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{ 
        //console.log("Component is Rendering");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => setUsers(data))

    },[])
    return(
        <div>
        <h2> Display User</h2>
        <table border = {2}>
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>username</th>
                <th>email</th>
                <th>websites</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=> (
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        </tr>
                    ))
                }
            </tbody>


        </table>
        
        </div>
    )
}

export default User;