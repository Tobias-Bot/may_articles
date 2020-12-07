import { HashRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Main from "./components/main";
import WriteArticle from "./components/write";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/write">
            <WriteArticle />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
