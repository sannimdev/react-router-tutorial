import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push("/");
  };

  const replaceHome = () => {
    history.replace("/");
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block("정말 떠나실 건가요 😥");
    return () => {
      //컴포넌트가 언마운트 될 때 실행하는 구문 작성
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaceHome}>홈으로 (Replace)</button>
    </div>
  );
}

export default HistorySample;
