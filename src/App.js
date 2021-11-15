import { BrowserRouter,Switch,Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Explore from "./Components/Explore/Explore";
import Home from "./Components/Home/Home/Home";
import Singledesc from "./Components/Home/Services/SingleDescription/Singledesc";
import NotFound from "./Components/NotFound/NotFound";
import Registration from "./Components/Registration/Registration";
import Signin from "./Components/Signin/Signin";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
function App() {
  return (
    <div className="App">
       <AuthProvider>
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

        <PrivateRoute exact path="/singledetails/:serviceid">
          <Singledesc></Singledesc>
        </PrivateRoute>

        <Route exact path="/signin">
          <Signin></Signin>
        </Route>

        <Route exact path="/registration">
           <Registration></Registration>
        </Route>

        <PrivateRoute  path="/dashboard">
           <Dashboard></Dashboard>
        </PrivateRoute>

        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
      
      </BrowserRouter>
      </AuthProvider> 
    </div>
  );
}

export default App;
