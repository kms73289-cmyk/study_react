import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [cnt, setCnt] = useState(0)
  
  let like = function () {
    setCnt( cnt + 1)
  }

  return (


    <div >

      <h2>♥{cnt}</h2>
      <input type="button" value="좋아요" onClick={like} />
    </div>
  );
}

export default App;
