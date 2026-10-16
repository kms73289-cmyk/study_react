import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [cnt, setCnt ] = useState(0)
  let [msg, setMsg] = useState('')

  let down = function(){
    setCnt( --cnt )

  }

  function reset(){
    setCnt(0)
  }

  function up(){
    setCnt( ++cnt )
  }

  function changeNum( event ){
    setCnt(event.target.value)
  }

  function evenOdd(){
    if(cnt === 0){
      setMsg("현재 카운트는 0입니다")
    }else if(cnt%2 === 0){
      setMsg("현재 카운트는 짝수입니다")
    }else{
      setMsg("현재 카운트는 홀수입니다")
    }
  }

  return (
    <div>
      
      <input type ='button' value='-' onClick={down}/>
      <input type ='button' value='0' onClick={reset}/>
      <input type ='button' value='+' onClick={up}/>

      <input type='button' value='짝수/홀수 확인' onClick={evenOdd}/>

      <input id='my_text' 
              value={cnt} 
              onChange={changeNum}
              size='3'/>

      <p>
        <span>{cnt}</span><br/>
        {msg}
      </p>

    </div>
  );
}

export default App;
