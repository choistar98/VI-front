import { BorderRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

function SideBar() {
    return (
      <div>
        <h1>This is for SideBar</h1>
        {/* 서브메뉴에 따라 URL 변경 */}
        {/* 예시: "/면접시작하기", "/결과 확인", "/질문리스트 확인" 등 */}
        <ul>
          <li><Link to="/면접시작하기">면접시작하기</Link></li>
          <li><Link to="/결과 확인">결과 확인</Link></li>
          <li><Link to="/질문리스트 확인">질문리스트 확인</Link></li>
        </ul>
      </div>
    )
  }
export default SideBar;