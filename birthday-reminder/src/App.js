import React, { useState } from 'react';
import Data from './Data';
import List from './List';
import './App.css';

function App() {
 const [people, setPeople] = useState(Data);



  return (
    <main>
      <div className="container">
      <h3 > {people.length} Birthday's Today</h3>
      <List people={people}/>
      <button onClick={()=> setPeople([])}>Clear All</button>
      </div>
    </main>

    );
}

export default App;
