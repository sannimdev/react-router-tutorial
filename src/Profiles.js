import React from "react";
import Profile from "./Profile";
import { Link, Route } from "react-router-dom";

function Profiles() {
  //서브 라우터
  //특정 경로에 탭이 있는 경우 서브 라우터를 이용하면 용이하다.
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
        <li>
          <Link to="/profiles/homer">homer</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={({ match, loaction }) => <div>사용자를 선택해 주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
