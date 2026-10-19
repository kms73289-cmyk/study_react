import React, { useState } from "react";

function ImageUpload({ setIsAnalyzed, setResult }) {

    const [image, setImage] = useState(null)
    const [status, setStatus] = useState('')
    const [file, setFile] = useState(null)

    const changeImage = (e) => {
        const file = e.target.files[0]//선택한 파일

        if (file) {

            setFile(file)

            //선택한 파일을 브라우저에서 사용할 수 있는 임시 URL로 변환
            //예) a.jpg ---> http://localhost:3000/a.jpg
            setImage(URL.createObjectURL(file))
            setStatus('')//이미지 초기화
            setIsAnalyzed(false)
        }
    }

    //이미지를 base64 형식으로 암호화 하는 메서드 추가
    const fileToBase64 = (file) => {

        return new Promise((resolve, reject) => {

            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {

                const base64 = reader.result.split(",")[1];
                resolve(base64);
            };

            reader.onerror = (error) => {

                reject(error);
            };

        });
    };

    const TEST_MODE = false;

    //이미지 분석 감지자
    const analyzeImage = async () => {

        if(TEST_MODE){

            const result = {
                type:"운동화", 
                features:["흰색", "스포츠화", "스니커즈"],
                similarity:98

            }

            setResult(result);
            setIsAnalyzed(true);
            setStatus("테스트 분석 완료!!")

            return;

        }
        if (!image) {//이미지 선택 안했을 때
            setStatus("먼저 이미지를 선택해주세요")
            return;
        }

        setStatus("분석 중...")

        try{

            //1.이미지를 Base64로 변환
            const base64Image = await fileToBase64( file )

            //2. vision api 호출
            const response = await fetch(
                "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAkCCpyjNSpvxIbqKFbYm2wqTyaoH-O5M0",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    }, 
                    body:JSON.stringify({
                        //자바스크립트 객체를 JSON구조로 바꿔주는 함수 -> stringify()
                        requests:[{
                            image:{ content:base64Image },
                            features:[{ 
                                type:"LABEL_DETECTION",
                                maxResults:10

                            }]
                        }]
                    })
                }
            );

            //3.api사용 후 돌려받은 JSON구조의 결과
            const data= await response.json();

            console.log("api 호출 결과 : ", data);

            //가져온 목록들 중 [0]번 index의 값을 labels에 저장하되
            //가져올 결과가 없는경우 빈 배열( [] )로 저장하시오
            const labels = data.responses?.[0].labelAnnotaions || []

            const result = {
                type:labels[0]?.description || '알 수 없음',
                features:labels.slice(1, 4)
                .map( label => label.description),
                similarity:labels[0] ? Math.round( labels[0].score * 100) : 0
            }

            setResult(result)
            setIsAnalyzed(true)
            setStatus("분석완료")

        }catch(err){

        }
    }

    return (
        <div className='upload-container'>
            <h2>AI 상품검색</h2>

            <p>
                상품 이미지를 업로드하면<br />비슷한 상품을 찾아드립니다
            </p>

            <div className="upload-box">

                {/* 사용자가 이미지를 업로드 한 경우 */}
                {image ? (
                    <img src={image}
                        className="preview-image" />
                ) : (
                    //이미지가 선택되지 않은 경우
                    <span>
                        <p> 상품 이미지를 선택해주세요</p>
                    </span>
                )}

                <label className="upload-button">
                    이미지 선택
                    <input type="file"
                        accept="image/*"
                        onChange={changeImage} />
                </label>

                <button className="analyze-button"
                    onClick={analyzeImage}>
                    AI 분석하기
                </button>

                {status && (
                    <p>{status}</p>
                )}
            </div>
        </div>
    )
}

export default ImageUpload