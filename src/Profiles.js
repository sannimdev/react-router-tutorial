import React from "react";
import Profile from "./Profile";
import { NavLink, Route } from "react-router-dom";
import RouterHookSample from "./RouterHookSample";
import WithRouterSample from "./WithRouterSample";

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
      {/* <WithRouterSample /> */}
      {/* location은 어디에서 불러오든 똑같은 정보를 가지고 있다. */}
      {/* { "path": "/profiles", "url": "/profiles", "isExact": false, "params": {} } */}
      {/* match쪽 파라미터에는 사용자 정보가 존재하지 않는다.
      WithRouterSample은 Profiles 내부에 렌더링이 되었다.
      match는 현재 렌더링된 컴포넌트를 기준으로 값을 받아오기 때문에 match에는 url parameter가 존재하지 않는다.*/}
      <RouterHookSample />
    </div>
  );
}

export default Profiles;
