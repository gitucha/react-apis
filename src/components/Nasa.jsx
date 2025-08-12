import axios from 'axios';
import React, { useEffect, useState } from 'react'


const BASE_URL = import.meta.env.VITE_NASA_BASE_URL;
console.log(BASE_URL)

function Nasa() {

    const [apod, setApod] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchApod = async () => {
            try{
                const response = await axios.get(BASE_URL)
                setApod(response.data);
            }
            catch (err){
                setError(err.message)
            } finally{
                setLoading(false)
            }
        }
        fetchApod();
    }, []);

    if(loading) return <p>Loading NASA image of the day...</p>
    if (error) return <p>Error: {error}</p>
  return (
    <div>
        <h2 className='text-center text-3xl text-blue-400' >NASA Image of the day</h2>

        {apod && (
            <div>
                <h3>{apod.title}</h3>
                <p>{apod.date}</p>
                <img src={apod.image} alt={apod.title} className='max-auto-w-full max-w-3xl h-150' />
                <p>{apod.explanation}</p>
            </div>
        )}
    </div>
  )
}

export default Nasa