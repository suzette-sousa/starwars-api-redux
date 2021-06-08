import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Details from "./components/Details/Details";

const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <main className="ctn">
          <Switch>
            <Route exact path={"/"} component={Search} />
            <Route path={"/search"} component={Search} />
            <Route path={"/results/:name"} component={Details} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
