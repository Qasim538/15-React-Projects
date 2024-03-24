import React, {useState} from 'react'
import singlecolor from './SingleColor'

// import Values from 'values.js'



function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
   const [list, setList] = useState([]);

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello');
   }


  return (
    <>
    <section className="container">
    <h3>color Generator</h3>
    <form onSubmit={handleSubmit}>
      <input type="text"  value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025'/>
      <button className="btn" type='submit'>submit</button>
    </form>
    
    </section>

    <section className="colors">
    
    </section>
    </>

  );
}

export default App;
