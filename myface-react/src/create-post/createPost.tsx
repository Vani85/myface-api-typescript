import './createPost.scss';
import { useState } from "react";
export function CreatePost ()  {

    const [message, setMessage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
  
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
  
      event.preventDefault();  
      const response = await fetch('http://localhost:3001/posts/create', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({
            message,  
            imageUrl,  
        }),
  
      });  
      const data = await response.json();  
      console.log(data);
  
    };


    return (
    <div className='form-container'>
        <h1> Create a new post </h1>
        <form onSubmit={handleSubmit}>       
            <ul className='form-items-ul'>
                <li className='form-items-li'>
                    <label> <strong> Message : </strong> </label>
                    <input type="text" id = "message" value={message} onChange={(event) => setMessage(event.target.value)} name="message" required/>
                </li>
                <li className='form-items-li'>
                    <label><strong> Image URL : </strong> </label>
                    <input type="url" name="imageUrl" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} required/>
                </li>
                <li>
                    <button className='button-submit' type="submit">Submit</button> 
                </li>
            </ul>
            
        </form>
    </div>
  );
};

