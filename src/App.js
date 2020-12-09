import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Main from "./components/main";
import WriteArticle from "./components/write";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentArticle: {},
    };

    this.setArticles = this.setArticles.bind(this);
    this.setCurrArticle = this.setCurrArticle.bind(this);
  }

  setArticles(articles) {
    this.setState({articles});
  }

  setCurrArticle(currentArticle) {
    this.setState({currentArticle});
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <Main
                onArticlesLoad={this.setArticles}
                onArticleCreate={this.setCurrArticle}
              />
            </Route>
            <Route path="/write">
              <WriteArticle
                articles={this.state.articles}
                currArticle={this.state.currentArticle}
              />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
