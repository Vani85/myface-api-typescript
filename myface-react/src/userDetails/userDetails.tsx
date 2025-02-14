import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import './userDetails.scss';

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
       
        <div className="user-image">  
            <img className="under" src={userData?.coverImageUrl} />
            <img className="over" src={userData?.profileImageUrl} />
        </div>

        <h1> My Posts </h1>
        <ul className="users-posts-container">
            {userData?.posts.map((post) => (
                <li className="posts" key={post.id}>  
                    <img className="post-image" src={post.imageUrl} /> 
                    {post.message} <br/>
                    <i> {post.createdAt.toString().slice(0,10)}  </i>
                </li>
            ))}
        </ul>
        <h1> Liked Posts </h1>

        <ul className="users-posts-container">
            {userData?.likes.map((post) => (
                    <li className="posts" key={post.id}>  
                        <img className="post-image" src={post.imageUrl} /> 
                        {post.message} <br/>
                        <i> {post.createdAt.toString().slice(0,10)}  </i>  
                    </li>
            ))}
        </ul>

        <h1> Disliked Posts </h1>
        <ul className="users-posts-container">
            {userData?.dislikes.map((post) => (
                    <li className="posts" key={post.id}>  
                        <img className="post-image" src={post.imageUrl} /> 
                        {post.message} <br/>
                        <i> {post.createdAt.toString().slice(0,10)}  </i>  
                    </li>
            ))}
        </ul>
    </div>
  );
};
