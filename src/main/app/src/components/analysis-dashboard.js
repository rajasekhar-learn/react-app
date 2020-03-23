import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import  AvarageResponsesOfAllResultsList  from "./ResponseForAllAgeGroups";
import  AvarageResponsesOfFemaleResultsList  from "./ResponsesByFemaleCatogoryResultsList";

export default function AnalysisDashBoard() {
  return (
    <Router>
      <div>
      <div class="container">
        <div class="row">
            <div class="col">
                <Link to="/all"><button type="button" class="btn btn-primary">Avarage Servay responses by all</button></Link>
            </div>
            <div class="col">
                <Link to="/female"><button type="button" class="btn btn-primary">Avarage Servay responses by female</button></Link>
            </div>
        </div>
    </div>
        
       
        <Switch>
          <Route path="/all">
            <AvarageResponsesOfAllResultsList />
          </Route>
          <Route path="/female">
            <AvarageResponsesOfFemaleResultsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
