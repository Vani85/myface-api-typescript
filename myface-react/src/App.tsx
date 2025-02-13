import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './App.scss'
import './post-list/postList.scss';
import { PostList } from './post-list/postList' 
import { UserDetails } from './userDetails/userDetails'
import { UserLists } from './users-list/usersList';
import { Home } from './home/home';
import { CreatePost } from './create-post/createPost';

function App() {

   return (
    <>
      <Router>
            <nav>
                My face
                <Link to="/home"> Home </Link> 
                <Link to="/posts"> Posts </Link> 
                <Link to="/posts/create"> Create Post </Link> 
                <Link to="/users"> Users List </Link> 
            </nav>
                          
          <Routes>
            <Route path="/home" element={<Home />}/> 
            <Route path="/posts" element={<PostList />}/> 
            <Route path="/posts/create" element={<CreatePost />}/>
            <Route path="/users" element={<UserLists />}/>   
            <Route path="/users/:userId" element={<UserDetails />}/>    
            <Route path="/posts/:postId/like" element={<PostList />}/>    
            <Route path="/posts/:postId/dislike" element={<PostList />}/>      
          </Routes>
      </Router>   
      
      </>


  )
}

export default App

