import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

{/* <style>
  .row{
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;}
  .column{
  width: 27.33%;
  max-width: 27.33% !important;
  }
</style> */}

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() =>{
  axios.get('/api/jokes')
  .then((response) => {
    setJokes(response.data.jokes)
  })
  .catch((error) =>{
    console.log(error)
  })
})

return (
    <>
      <h2>Sushma With Chai</h2>
      <p>JOKES :{jokes.length}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'start' }}>
            {jokes.map((joke) => (
                <div key={joke.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', margin: '10px', maxWidth: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', flex: '1 1 calc(33.333% - 40px)' }}>
                    <img src="ghjghj" alt={joke.title} style={{ width: '100%', borderRadius: '10px' }} />
                    <h3 style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}>{joke.title}</h3>
                    <p style={{ color: '#555', fontFamily: 'Georgia, serif' }}>{joke.content}</p>
                    <a href={joke.link} style={{ textDecoration: 'none', color: '#007BFF' }}>Read more</a>
                </div>
            ))}
        </div>



    </>
  )
}

export default App
