import React, { useState, useEffect } from 'react';
// import { FaAngleDoublering } from 'react-icon/fa'
const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const responce = await fetch(url);
    const newJobs = await responce.json()
    setJobs(newJobs)
    setLoading(false)
  }

useEffect(() => {
  fetchJobs();
}, []);



if(loading) {
return <section className='section loading'>
  <h1>loading...</h1>
</section>
}


  return (
    <h2>Jobs</h2>
  );
}

export default App;
