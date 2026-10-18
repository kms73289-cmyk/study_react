import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginValidation from "../commons/LoginValidation";//유효성 검사 함수 가져오기
import axios from "axios";

function Login() {

    const navi = useNavigate();//페이지 이동 함수

    const [values, setValues] = useState({
        email: '',
        password: ''

    })//이메일, 비밀번호 저장 변수 

    // const [errors, setErrors] = useState()

    const handleSubmit =(e) => {
        e.preventDefault();//새로고침 방지

        const bError = LoginValidation(values); //로그인 유효성 체크
        // setErrors( LoginValidation(values) )

        if(!bError){ //유효성 검사 실패할 경우 함수 종료
            return;
        }

        axios.post( '/login', values)//로그인 데이터 전송
             .then( res => {


                if( res.data.result === 'success'){//로그인 결과가 success인 경우
                    alert("로그인 성공") //로그인성공 경고창 띄우기
                    navi("/main_content", //'/main_content'로 이동
                            {state:{ name:res.data.name, 
                                     email:res.data.email}})//이름과 이메일 state로 전달              
                }else{
                    alert("아이디나 비밀번호를 확인하세요")//로그인 실패할 경우 경고창 띄우기 
                }
             })
    }

    const handleInput = (e) => {
        setValues({
            ...values,//기존 값 복사(이메일, 비밀번호 둘다 저장하기 위함)
            [e.target.name] : e.target.value //입력한 값 넣기
        })
    }

    return (
        <div>

            <h2>로그인</h2>

            <form onSubmit={handleSubmit}> 
                {/* 제출 시 handleSubmit 실행 */}

                <div className="email">
                    <label>Email</label>
                    <input placeholder="enter email"
                        name='email'
                        onChange={handleInput} />
                        {/* 이메일 값 입력시 handleInput실행*/}
                </div>

                <div className="pwd">
                    <label>Password</label>
                    <input placeholder="enter password"
                        type="password"
                        name='password'
                        onChange={handleInput} />
                        {/*  비밀번호 값 입력시 handleInput실행 */}
                </div>


                <button className="btn-login"
                        type="submit">
                    로그인
                </button>

                <p>계정이 없으신가요?</p>
                <Link to='/signup'>{/* 회원가입 페이지로 이동*/}
                    회원가입
                </Link>

            </form>
        </div>

    )
}

export default Login