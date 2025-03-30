import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {

    const [users, setUsers] = useState([]);

    // 1. fetch 사용
    const getUserData = async () => {
        try {
            const res = await fetch("/api/user/userList");
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.error("데이터를 가져오는 중 오류 발생:", error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    
    // 2. axios 사용
    // useEffect(() => {
    //     axios.get('/api/user/userList')
    //         .then((res) => {
    //             setUsers(res.data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    //
    // }, []);

    return (
        <div className="App">
            <h1>사용자 목록</h1>

            <ul>
                {users.map(user => (
                    <li key={user.userId}>
                        <p>이름: {user.userName}</p>
                        <p>이메일: {user.email}</p>
                        <p>아이디: {user.userId}</p>
                    </li>
                ))}
            </ul>
        </div>
    );



};

export default Home;
