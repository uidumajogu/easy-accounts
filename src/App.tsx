import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import DashboardPage from "./Components/Pages/DashboardPage/DashboardPage";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import OpenAccountPage from "./Components/Pages/OpenAccountPage/OpenAccountPage";
import PageNotFound from "./Components/Pages/PageNotFound/PageNotFound";



const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={LandingPage} />
        <Route exact={true} path="/dashboard" component={DashboardPage} />
        <Route exact={true} path="/open-account" component={OpenAccountPage} />
        <Route exact={true} path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;