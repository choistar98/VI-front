import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';


// const [selectedSubMenu, setSelectedSubMenu] = useState(null);
// const navigate = useNavigate();

// const handleSubMenuClick = (subMenu) => {
//   setSelectedSubMenu(subMenu);
//   navigate(`/main/${subMenu}`); // URL 업데이트
// };


function App() {
  const sections = [
    { title: '가상면접', url: '#',submenu:['면접시작하기','결과 확인','질문리스트 확인'] },
    { title: '스터디그룹', url: '#', submenu:['화상회의 시작','그룹 생성','그룹 참여','그룹 목록확인'] },
    { title: '커뮤니티', url: '#',submenu:['자유게시판','면접게시판','취업게시판','스터디그룹모집게시판'] },
    { title: '마이페이지', url: '#',submenu:['정보 수정','나의 면접','내가 쓴 글','나의 스터디그룹',"회원 탈퇴"] },
    { title: '문의하기', url: '#', submenu:['문의사항','건의사항','공지사항']}
  ];


  return (
    <Router basename={'/'}>
      <div style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
        <Header title="VI" sections={sections} />
        <Main ></Main>
      </div>
    </Router>
    
  );
}

export default App;