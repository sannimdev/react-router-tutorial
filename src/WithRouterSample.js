import React from "react";
import { withRouter } from "react-router-dom";

function WithRouterSample({ history, location, match }) {
  return (
    <div>
      <h4>location</h4>
      <p>{JSON.stringify(location, null, 2)}</p>
      <h4>match</h4>
      <p>{JSON.stringify(match, null, 2)}</p>
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
}

export default withRouter(WithRouterSample);
