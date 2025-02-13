import { useEffect, useState } from "react";
import './postList.scss';

type PostUserModel = {
    id: number;
    name: string;
    username: string;
    email: string;
}

type PostsResponse = {
    results: {
        id: number;
        message: string;
        imageUrl: string;
        createdAt: Date;
        postedBy: PostUserModel;
        likedBy: PostUserModel[];
        dislikedBy: PostUserModel[];
    }[]
}

export function PostList ()  {

    const [postData, setPostData] = useState<PostsResponse>();

    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(1);

  
    useEffect(() => {
        const fetchPosts = async () => {       
            let response;
            try {
                response = await fetch(`http://localhost:3001/posts?page=${page}&pageSize=${pageSize}`);
                const data = await response.json();
                setPostData(data);
                
            } catch (err) {
                console.log(err);
            } 
            return response;
        }
        fetchPosts();
    },[page , pageSize]);

    return (
    <div>
         <h1> Posts </h1>
            <ul id="postsListContainer">
                {postData?.results.map((post) => (
                    <li className = "posts" key={post.id}>  
                        <img className="post_image"  src={post.imageUrl} />
                        <p> Message: {post.message} </p> 
                        <p> Date posted: {post.createdAt.toString()} </p>   
                        <p> Posted by: {post.postedBy.name} </p> 
                        {/* <p> Liked by: {post.likedBy.map((user) => (user.name) + " . ")} </p>  
                        <p> Disliked by: {post.dislikedBy.map((user) => (user.name) + " . ")} </p>   */}
                    </li>
                ))}
            </ul>


    </div>
  );
};
