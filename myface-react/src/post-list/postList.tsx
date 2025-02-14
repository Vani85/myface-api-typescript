import { useEffect, useState } from "react";
import './postList.scss';
import { Link, useSearchParams } from "react-router-dom";

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
    next: string;
    previous: string;
}

export function PostList ()  {

    const [postData, setPostData] = useState<PostsResponse>();
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page")||1;
    const pageSize = searchParams.get("pageSize")||10;
  
    useEffect(() => {
        const fetchPosts = async () => {       
            let response;
            try {
                response = await fetch(`http://localhost:3001/posts?page=${page}}&pageSize=${pageSize}`);
                const data = await response.json();
                setPostData(data);
                
            } catch (err) {
                console.log(err);
            } 
            return response;
        }
        fetchPosts();
    },[page,pageSize]);

    return (
    <div>
        <h1> Posts </h1>
        <ul id="posts-list-container">
            {postData?.results.map((post) => (
                <li className = "posts" key={post.id}>  
                    <img className="post-image"  src={post.imageUrl} />
                    <div id="postContent">
                        <strong>{post.postedBy.name} </strong> <br/>
                        <i> {post.createdAt.toString().slice(0,10)} </i> <br/><br/>
                        {post.message} <br/>

                        <div className="like-dislike-container">
                            <form method="post"action={`/posts/${post.id}/like`}>  
                                <button className='like-dislike' type="submit">&#128077;</button>
                            </form>

                            <form method="post"action={`/posts/${post.id}/dislike`}>  
                                <button className='like-dislike' type="submit">&#128078;</button>
                            </form>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        
        <div className="button-container">
            <Link to={`${postData?.next}`} className="button-post-links"> Next </Link>
            <Link to = {`${postData?.previous}`}className="button-post-links"> Previous </Link>
        </div>

    </div>
  );
};
