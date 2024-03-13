import React, {useState} from 'react'
import data from './data'
import singleQuestion from './Questions'
import './App.css';

function App() {
  const [questions, setQuestions] = useState(data)
  return (

    <main>
      <div className="container">
        <h3>Questions and Answers about login</h3>
        <section className="info">
          {
            questions.map((question) => {


            })
          }
        </section>
      </div>

    </main>
   
  );
}

export default App;
