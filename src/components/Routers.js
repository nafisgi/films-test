import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Pages/Main";
import FilmPage from "./Pages/FilmPage";

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/film/:id" component={FilmPage} />
    <Route>
      <div className="text-center">
        <h1>404</h1>
        <h2>Страница не найдена</h2>
      </div>
    </Route>
  </Switch>
);
