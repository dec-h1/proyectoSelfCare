import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageIntro } from "./pages/intro";
import { PageWelcome } from "./pages/welcome"
import { PageRegister } from "./pages/register";
import { PageLogin } from "./pages/login";
import { PageUserData } from "./pages/userdata"
import { PageUserGoal } from "./pages/usergoal"
import 'antd/dist/antd.css'; 
import "./App.css";

function App() {
  return (
    <div className="App w-80 mx-auto  h-screen">
      <Router>
        <Switch>
          <Route path="/intro">
            <PageIntro />
          </Route>
          <Route path="/welcome">
            <PageWelcome />
          </Route>
          <Route path="/register">
            <PageRegister />
          </Route>
          <Route path="/login">
            <PageLogin />
          </Route>
          <Route path="/userdata">
            <PageUserData />
          </Route>
          <Route path="/usergoal">
            <PageUserGoal />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
