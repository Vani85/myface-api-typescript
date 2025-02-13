import './createPost.scss';
export function CreatePost ()  {
  
    return (
    <div className='form-container'>
        <h1> Create a new post </h1>
        <form method="post" action="/posts/create">       
            <ul className='form-items-ul'>
                <li className='form-items-li'>
                    <label> <strong> Message : </strong> </label>
                    <input type="text" id = "message" name="message" required/>
                </li>
                <li className='form-items-li'>
                    <label><strong> Image URL : </strong> </label>
                    <input type="url" name="imageUrl" required/>
                </li>
                <li>
                    <button className='button-submit' type="submit">Submit</button> 
                </li>
            </ul>
            
        </form>
    </div>
  );
};
