import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './usersList.scss';

type UserPostModel = {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: Date;
}

type UserModel = {
    results: {
        id: number;
        name: string;
        username: string;
        profileImageUrl: string;
        coverImageUrl: string;
        email: string;
        posts: UserPostModel[];
        likes: UserPostModel[];
        dislikes: UserPostModel[];
    }[]
}
export function UserLists ()  {

    const [users, setUsers] = useState<UserModel>();
   
    useEffect(() => {
        const fetchUsersList = async () => {       
            let response;
            try {
                response = await fetch(`http://localhost:3001/users/`);
                const data = await response.json();
                setUsers(data);
                
            } catch (err) {
                console.log(err);
            } 
            return response;
        }
        fetchUsersList();
    },[]);

    return (
    <div >
         <h1> Users List </h1>           
            <ul id="UsersContainer">
                {users?.results.map((user) => (
                    <li id="eachuser" key={user.id}>  
                        <img className="user-image" src={user.profileImageUrl} /> <br/>
                        <Link to = {`/users/${user.id}`} > {user.name} </Link> 
                    </li>
                ))}
            </ul>            
    </div>
  );
};
