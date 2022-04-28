import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home.js"
import Login from "./user/Login";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    // <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/count">
            <h1>Page Count: {count}</h1>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    // </BrowserRouter>
  );
}

export default App;
