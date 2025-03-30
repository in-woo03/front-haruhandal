import React from 'react';
import { Link } from 'react-router-dom';

function App() {

    return (
        <div>
            <h1>메인 페이지</h1>
            <nav>
                <Link to="/home">유저 리스트</Link>
                <br/>
                <Link to="/group">그룹 생성 페이지</Link>
            </nav>
        </div>
    );
}

export default App;
