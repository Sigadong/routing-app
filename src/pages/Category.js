import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export

export default () => <div>
  <h2>Halaman Category</h2>
  <ul>
    <li><Link to="/category/foods">Foods</Link></li>
    <li><Link to="/category/drinks">Drinks</Link></li>
  </ul>
  <hr />
  <Switch>
    <Route path="/category/foods">
      List of foods: bakso, sate, soto, dll
    </Route>
    <Route path="/category/drinks">
      List of foods: air mineral, es teh, kopi,  dll
    </Route>
  </Switch>
</div>