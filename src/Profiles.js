import React from "react";
import Profile from "./Profile";
import { NavLink, Route } from "react-router-dom";
import RouterHookSample from "./RouterHookSample";

function Profiles() {
  //서브 라우터
  //특정 경로에 탭이 있는 경우 서브 라우터를 이용하면 용이하다.
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            activeStyle={{ background: "black", color: "white" }}
            activeClassName="active"
            // exact 속성도 추가할 수 있음
            isActive={(match, location) => {
              return true; //조건을 지정하여 true인 경우에만 활성화
            }}
            to="/profiles/gildong"
          >
            gildong
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ background: "black", color: "white" }}
            activeClassName="active"
            to="/profiles/homer"
          >
            homer
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={({ match, loaction }) => <div>사용자를 선택해 주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <RouterHookSample />
    </div>
  );
}

export default Profiles;
