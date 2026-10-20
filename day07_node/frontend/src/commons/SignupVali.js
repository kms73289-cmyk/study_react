import React from "react";
import Signup from "../pages/Signup";

//회원가입 유효성 체크
function SignupVali( values ){//이름, 이메일, 비밀번호 값을 values로 받기
    

    if( values.name == '' ){//이름 입력칸이 빈칸일 경우
        alert("이름을 입력하세요");//경고창 띄우기
        return false;//false 반환
    }

    if( values.email == '' ){//이메일 입력칸이 빈칸일 경우
        alert("이메일을 입력하세요");//경고창 띄우기
        return false;//false반환
    }

    if( values.password == ''){//비밀번호 입력칸이 빈칸일 경우
        alert("비밀번호를 입력하세요");//경고창 띄우기
        return false;//false 반환
    }

    return true;//이름, 이메일, 비밀번호 모두 입력된 경우 true 반환

}
export default SignupVali