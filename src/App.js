import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageIntro } from "./pages/intro";
import { PageRegister } from "./pages/register";
import { PageLogin } from "./pages/login";
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
          <Route path="/register">
            <PageRegister />
          </Route>
          <Route path="/login">
            <PageLogin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
