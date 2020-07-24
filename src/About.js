import React from "react";
import qs from "qs";

function About({ location }) {
  console.log(location);
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const detail = query.detail === "true"; //쿼리는 모두 문자열로 가져오기 때문에 문자열로서 비교해야 한다.
  console.log(query, detail);
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {detail && <p>detail값이 true입니다.</p>}
    </div>
  );
}

export default About;
