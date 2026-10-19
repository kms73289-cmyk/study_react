import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupVali from "../commons/SignupVali";
import axios from 'axios';

function Signup() {

    const navi = useNavigate()//페이지 이동 함수

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })//이름, 이메일, 비밀번호 입력값 저장

    // const [errors, setErrors] = useState()

    const handleSubmit = (e) => {
        e.preventDefault() //새로고침 방지

        const bError = SignupVali(values) //유효성 체크 함수 실행
        // setErrors(SignupVali(values))

        if(!bError){//유효성 체크 실패일경우 함수 종료
            return;
        }

        axios.post( '/signup', values )//'signup'으로 회원가입 정보 보내기
             .then( res => { 
                alert("가입성공");//가입성공 알림창 띄우기
                navi('/')//로그인 페이지로 가기
              })
    }

    const handleInput = (e) => {
        setValues({
            ...values,//기존 값 복사
            [e.target.name]: e.target.value//이름, 이메일, 비밀번호 저장
        })
    }

    return (
        <div>
            <h2>회원가입</h2>

            <form onSubmit={handleSubmit}>
                {/* 제출 시 handleSubmit 함수 실행 */}

                <div className="name">
                    <label>이름</label>
                    <input placeholder="enter name"
                        onChange={handleInput}
                        //이름입력, handleInput실행
                        name="name" />
                </div>

                <div className="email">
                    <label>이메일</label>
                    <input placeholder="enter email"
                        onChange={handleInput}
                        //이메일입력, handleInput실행
                        name="email" />
                </div>

                <div className="pwd">
                    <label>비밀번호</label>
                    <input placeholder="enter password"
                        type="password"
                        onChange={handleInput}
                        //비밀번호 입력, handleInput실행
                        name="password" />
                </div>

                <button type="submit">가입완료</button>

                <p>계정이 있으신가요?</p>
                <Link to='/'>로그인</Link>
                {/* 로그인 페이지로 이동 */}

            </form>
        </div>
    )
}
export default Signup