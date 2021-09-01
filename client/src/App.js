import React from "react";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/Join" component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  );
};

export default App;
