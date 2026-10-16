import logo from './logo.svg';
import './App.css';

function App() {

  let name = '홍길동'

  function hello() {
    return "안녕하세요"
  }

  return (
    <div>
      <h1>{name} / {hello()}</h1>

      <Test title='React'
        onChangeMode={function () { alert('나는 header') }} />

      {/* 이벤트1 */}
      <Test2 title='Hello'
        myChangeMode={function (id) { alert("id: " + id) }} />

      {/* 이벤트2 */}
      <Test2 title='Hello'
        myChangeMode={ (id) => { alert("id: " + id) }} />

    </div>
  );
}

function Test2(props) {
  return (
    <div>
      <ul>
        <li>
          <a id='1' href='/' onClick={function (event) {
            event.preventDefault();
            props.myChangeMode(event.target.id)
          }}>
            {props.title}
          </a>
        </li>

      </ul>
    </div>
  )
}

function Test(props) {
  return (
    <div>
      <h1>
        <a href='/' onClick={function () { alert('클릭함') }}>
          {props.title}</a>
      </h1>

      <h1>
        <a href='/' onClick={function (event) {
          //a태그의 기본기능을 막는다
          event.preventDefault();
          props.onChangeMode()
        }}>
          {props.title}

        </a>
      </h1>
    </div>
  )
}
export default App;
