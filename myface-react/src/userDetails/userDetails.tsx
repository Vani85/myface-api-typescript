import { useEffect, useState } from "react";
import { useParams } from 'react-router';

type UserPostModel = {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: Date;
}

type UserModel = {
    id: number;
    name: string;
    username: string;
    profileImageUrl: string;
    coverImageUrl: string;
    email: string;
    posts: UserPostModel[];
    likes: UserPostModel[];
    dislikes: UserPostModel[];
}
export function UserDetails ()  {

    const [userData, setUserData] = useState<UserModel>();
    const { userId } = useParams();

    useEffect(() => {
        const fetchUserData = async () => {       
            let response;
            try {
                response = await fetch(`http://localhost:3001/users/${userId}`);
                const data = await response.json();
                setUserData(data);
                
            } catch (err) {
                console.log(err);
            } 
            return response;
        }
        fetchUserData();
    },[userId]);

    return (
    <div id="UserDetailsContainer">
         <h1> {userData?.name} </h1>
            <img src={userData?.profileImageUrl} />
            <img src={userData?.coverImageUrl} />
            <p> {userData?.username} </p>
            <p> {userData?.email} </p>

            <ul>
                {userData?.posts.map((post) => (
                    <li key={post.id}>  
                        <img  src={post.imageUrl} /> 
                        <p> Post ID: {post.id} </p> 
                        <p> Message: {post.message} </p> 
                        <p> Date posted: {post.createdAt.toString()} </p>   
                    </li>
                ))}
            </ul>
            <h3> Liked Posts </h3>

            <ul>
                {userData?.likes.map((post) => (
                        <li key={post.id}>  
                            <img  src={post.imageUrl} /> 
                            <p> Post ID: {post.id} </p> 
                            <p> Message: {post.message} </p> 
                            <p> Date posted: {post.createdAt.toString()} </p>   
                        </li>
                ))}
            </ul>

            <h3> Disliked Posts </h3>
            <ul>
                {userData?.dislikes.map((post) => (
                        <li key={post.id}>  
                            <img  src={post.imageUrl} /> 
                            <p> Post ID: {post.id} </p> 
                            <p> Message: {post.message} </p> 
                            <p> Date posted: {post.createdAt.toString()} </p>   
                        </li>
                ))}
            </ul>
    </div>
  );
};
