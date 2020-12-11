import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import PageNotFound from "./Components/Pages/PageNotFound/PageNotFound";
import menus from "./Data/menus";
import { v4 } from "uuid";

const App = () =>
{

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={LandingPage} />
        <Route exact={true} path="/" component={LandingPage} />
        {menus.map((menu) =><Route key={v4()} exact={true} path={menu.path} component={menu.routeComponent} /> 
          )}
        <Route exact={true} path="/404" component={PageNotFound} />
        <Redirect to="/404" />
        </Switch>
    </BrowserRouter>
  );
};

export default App;