import { useEffect, useState } from "react";

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
    <div id="UsersContainer">
         <h1> Users List </h1>           
            <ul>
                {users?.results.map((user) => (
                    <li key={user.id}>  
                        <img  src={user.profileImageUrl} /> 
                        <a href = {`/users/${user.id}`} > {user.name} </a> 
                    </li>
                ))}
            </ul>            
    </div>
  );
};
