import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MainPage(){

    const location = useLocation()
    const name = location.state.name;
    const email = location.state.email;

    const navi = useNavigate();//페이지 이동 함수

    //탈퇴하기
    const deleteMember = () => {

        axios.post( '/withdraw',{email:email})//이메일 값 주기
            .then(res => {

                if( res.data == 'success'){ //결과 값이 success일 경우
                    alert("탈퇴성공");//탈퇴성공 경고창 띄우기
                    navi('/')//경로를 '/'로바꾸기 로그인페이지로 이동

                }
            })

    }
    return(
        <div>
            <h1>{name}님 환영합니다</h1>
            <button onClick={deleteMember}>탈퇴</button>{/* 버튼 클릭 시 deleteMember함수 실행 */}
        </div>
    )
}
export default MainPage