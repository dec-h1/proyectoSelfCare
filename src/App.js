import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageIntro } from "./pages/intro";
import { PageWelcome } from "./pages/welcome"
import { PageRegister } from "./pages/register";
import { PageLogin } from "./pages/login";
import { PageUserData } from "./pages/userdata"
import { PageUserGoal } from "./pages/usergoal"
import { FilterPage } from "./pages/filterpage";
import { PageUserInterface } from "./pages/userinterface";
import { Quizzes } from "./pages/quizzes";
import { Quiz } from "./pages/quizzes/Quiz";
import { Facts } from "./pages/quizzes/Facts";
import { Right } from "./pages/correctanswer";
import { Wrong } from "./pages/failanswer";

import 'antd/dist/antd.css'; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
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
          <Route path="/filterpage">
            <FilterPage />
          </Route>
          <Route path="/userinterface">
            <PageUserInterface />
          </Route>
          <Route path="/quizzes">
            <Quizzes />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/facts">
            <Facts />
          </Route>
          <Route path="/wrong">
            <Wrong />
          </Route>
          <Route path="/right">
            <Right />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
