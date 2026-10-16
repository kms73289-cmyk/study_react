import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [users, setUsers] = useState([])

  const list = () =>{

    if( name.trim(), age.trim()){
      setUsers( [...users, {name, age}] )
      setName('')
      setAge('')
    }

  }

  const delUsers = (index) =>{
    let newUsers = users.filter((_,i)=> i !== index)
    setUsers(newUsers)
  }

  return (
    <div>
      <h1>사용자 목록</h1>

      <input placeholder='이름을 입력하세요' 
             onChange={(e)=>{ setName(e.target.value)}} 
             value = {name}/><br/>
      <input placeholder='나이를 입력하세요' 
             onChange={(e)=>{setAge(e.target.value)}}
             value = {age}/>
      <input type='button' value='확인' onClick={list}/>

      <hr/>

      <table border="1">
        <tr>
          <th>순번</th>
          <th>이름</th>
          <th>나이</th>
          <th>비고</th>
        </tr>

        
        {
            users.map((u, index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td><input type='button' value='삭제' 
                           onClick={ ()=>{ delUsers(index)}}/></td>
                

              </tr>
            ))
          }
        
          
        
      </table>
    </div>
  );
}

export default App;
