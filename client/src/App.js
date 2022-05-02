import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home.js"
import MusicLogin from "./musiccomponents/MusicLogin.js";
import Login from "./user/Login";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState("")
  const [login, setLogin] = useState("")
  const [isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  if(!user) {
    // console.log("not logged in")
    console.log("login:", login)
    return <Login setIsLoading={setIsLoading} user={user} setUser={setUser} password={password} setPassword={setPassword} username={username} setUsername={setUsername} login={login} setLogin={setLogin} />
  }

  console.log("user:", user)

  return (
    // <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login setIsLoading={setIsLoading} user={user} setUser={setUser} password={password} setPassword={setPassword} username={username} setUsername={setUsername} login={login} setLogin={setLogin} />
          </Route>
          <Route path="/count">
            <h1>Page Count: {count}</h1>
          </Route>
          <Route exact path="/">
            <Home user={user}/>
          </Route>
          <Route path="/musiclogin">
            <MusicLogin user={user} setUser={setUser}/>
          </Route>
        </Switch>
      </div>
    // </BrowserRouter>
  );
}

export default App;
