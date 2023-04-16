import { useParams } from "react-router-dom";

const MainContainer = ({ selectedSubMenu }) => {
    const { subMenu } = useParams(); // useParams 훅을 사용하여 URL 파라미터 가져오기

    console.log(subMenu);
  
    return (
      <div>
        {/* 서브메뉴에 따라 동적으로 내용 표현 */}
        {selectedSubMenu === 'abc' && <div>면접시작하기 내용</div>}
        {selectedSubMenu === '결과 확인' && <div>결과 확인 내용</div>}
        {selectedSubMenu === '질문리스트 확인' && <div>질문리스트 확인 내용</div>}
        {selectedSubMenu === '화상회의 시작' && <div>화상회의 시작 내용</div>}
        {selectedSubMenu === '그룹 생성' && <div>그룹 생성 내용</div>}
        {selectedSubMenu === '그룹 참여' && <div>그룹 참여 내용</div>}
        {selectedSubMenu === '그룹 목록확인' && <div>그룹 목록확인 내용</div>}
        {/* 이하 생략 */}
      </div>
    );
  };
export default MainContainer;