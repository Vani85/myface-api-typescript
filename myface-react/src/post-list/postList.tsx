import { response } from "express";
import { useEffect, useState } from "react";

export function PostList ()  {

    const [postData, setPostData] = useState(null);

    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(1);
    let responseData;
    useEffect(() => {
        const fetchPosts = async () => {       
            try {
                const response = await fetch("http://localhost:3001/posts?page=${page}&pageSize=${pageSize}");
                const data = await response.json();
                setPostData(data);
                
            } catch (err) {
                console.log(err);
            } 
            return response.json();
        }
        responseData = fetchPosts();
        },[page , pageSize]);

    for(const post of responseData.results) {
        console.log (post.id);
        console.log (post.message);
        console.log (post.imageUrl);
        console.log (post.createdAt);
    }
     return (
    <>
       <h1> response is fetched</h1>
    </>
  )
}
