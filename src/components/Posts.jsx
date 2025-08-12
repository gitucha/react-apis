import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CreatePost from './CreatePost';

const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(BASE_URL);

                setPosts(response.data);

            } catch (err) {
               setError(err.message) 
            }
        }
        fetchPosts();
    }, []);

    const handleAddPost = (newpost) => {
        setPosts((prev) => [newpost, ...prev])
    }

    if (error) return <p>Error: {error}</p>;
    if (posts.length === 0) return <p>Loading Posts</p>
  return (
    
    <div className='m-6'>
        <CreatePost  onPostCreated={handleAddPost}/>
        <h2 className='mt-5 text-center text-3xl text-blue-400'>Posts List</h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {posts.map((post) => (
                <li key={post.id}>
                    <h3 className='text-2xl text-blue-300'>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Posts