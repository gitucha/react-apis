import axios from 'axios';
import React, { useState } from 'react'

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

function CreatePost({ onPostCreated }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await axios.post(BASE_URL, {
                title,
                body,
                userId: 1
            });

            if (onPostCreated) {
                onPostCreated(res.data)
            }
            setTitle("");
            setBody("");

        } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
  return (
    <div className='m-6'>
        <h2 className='text-3xl text-blue-500 mb-4'>Create a Post</h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
            <input 
                type="text"
                placeholder='Post title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='border p-2 w-3xl rounded  required'
            />
            <textarea 
                placeholder='Post body'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className='border p-2 w-3xl'
                rows="4"
                required
            ></textarea>

            <br />
            <button 
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded'
            >
            Create Post
            </button>
        </form>

        {error && <p className='text-red-500'>Error: {error}</p>}
        {/* {response && (
            <div className='mt-6 p-4 border rounded bg-green-50'>
                <h3 className='font-bold'>Post Created Successfully:</h3>
                <p>ID: {response.id}</p>
                <p>Title: {response.title}</p>
                <p>Body: {response.body}</p>
            </div>
        )} */}
    </div>
  )
}

export default CreatePost