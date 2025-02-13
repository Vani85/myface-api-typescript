import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './App.css'
import { PostList } from './post-list/postList' 
import { UserDetails } from './userDetails/userDetails'

function App() {

   return (
    <>
      <Router>
          <h1>My face</h1>
              <nav>
                  <li> <Link to="/posts"> Posts </Link> </li>
                  <li> <Link to="/users"> Users List </Link> </li>
              </nav>
              
          <Routes>
            <Route path="/posts" element={<PostList />}/>            
            <Route path="/users/:userId" element={<UserDetails />}/>           
          </Routes>
      </Router>   
      
      </>


  )
}

export default App

