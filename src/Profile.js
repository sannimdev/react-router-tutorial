import React from "react";
import WithRouterSample from "./WithRouterSample";

const profileData = {
  gildong: {
    name: "홍길동",
    description: "Frontend Engineer @ Github",
  },
  homer: {
    name: "호머 심슨",
    description: "심슨 가족에 나오는 아빠 역할 캐릭터",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      {/* Route로 사용되지 않은 컴포넌트에서 특정 조건이 만족할 때 특정 경로로 이동하고자 한다면  WithRouter를 사용한다. */}
      {/* <WithRouterSample /> */}
      {/* Profile.js에서 바라보는 관점에서는 match 값은 다음과 같다. 
      { "path": "/profiles/:username", "url": "/profiles/gildong", "isExact": true, "params": { "username": "gildong" } }*/}
    </div>
  );
}

export default Profile;
