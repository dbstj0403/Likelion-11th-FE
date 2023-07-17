import './AddInfo.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function AddInfo ({setRegisterState}) {
    const [name, setName] =useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [univ, setUniv] = useState("");
    const [track, setTrack] = useState("Backend");
    const [studentId, setStudentId] = useState("");

    const submitInfo = async () => {
        try {
            const response = await axios.post("http://localhost:8000/accounts", 
            {name: name, 
             phone: phoneNumber,
             univ: univ,
             track: track,
             student_id: studentId,
            },
            {headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}`,},});
            console.log(response);
            setRegisterState(true);
        }
        catch(error){
            console.log("Add info submit error!");
            if (name === "" || phoneNumber === "" || univ === "" || track === "" || studentId === "")
            {
                alert("모든 입력사항을 입력해 주세요!");
            }
            else{
                alert("형식에 맞게 답변을 입력해 주세요!")
            }
        }
    }
    console.log(track);
    return (
        <div className="mine">
            <h2>🦁 윤영 팀 서비스를 이용하기 전에 추가적인 정보를 입력해 주세요!</h2>
            <div className="forwhat"><h3>이름</h3></div>
            <div><input placeholder="ex) 홍길동" onChange={(e) => {setName(e.target.value)}}></input></div>
            <div className="forwhat"><h3>전화번호</h3></div>
            <div><input placeholder="ex) 010-1234-5678" onChange={(e) => {setPhoneNumber(e.target.value)}}></input></div>
            <div className="forwhat"><h3>학교</h3></div>
            <div><input placeholder="ex) 홍익대학교" onChange={(e) => {setUniv(e.target.value)}}></input></div>
            <div className="forwhat"><h3>트랙</h3></div>
            <div><select onChange={(e) => {setTrack(e.target.value)}}>
                    <option value='Backend'>Backend</option>
                    <option value='Frontend'>Frontend</option>
                    <option value='Design'>Design</option>
                </select>
            </div>
            <div className="forwhat"><h3>학번</h3></div>
            <div><input placeholder="ex) C135237" onChange={(e) => {setStudentId(e.target.value)}}></input></div>
            <div><button className="submit" onClick={submitInfo}>제출</button></div>
        </div>
    );
}