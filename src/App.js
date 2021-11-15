import { BrowserRouter,Switch,Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Explore from "./Components/Explore/Explore";
import Home from "./Components/Home/Home/Home";
import Singledesc from "./Components/Home/Services/SingleDescription/Singledesc";
import NotFound from "./Components/NotFound/NotFound";
import Registration from "./Components/Registration/Registration";
import Signin from "./Components/Signin/Signin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    

      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/home">
          <Home></Home>
        </Route>

        <Route exact path="/explore">
          <Explore></Explore>
        </Route>

        <Route exact path="/singledetails/:serviceid">
          <Singledesc></Singledesc>
        </Route>

        <Route exact path="/signin">
          <Signin></Signin>
        </Route>

        <Route exact path="/registration">
           <Registration></Registration>
        </Route>

        <Route  path="/dashboard">
           <Dashboard></Dashboard>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
      
      </BrowserRouter>
        
    </div>
  );
}

export default App;
