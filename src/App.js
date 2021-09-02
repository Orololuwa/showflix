import Globalstyles from "./Global";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { Switch, Route } from "react-router";

function App() {
  return (
    <>
      <Globalstyles />
      <Layout>
        <Switch>
          <Route path="/movie-:id" exact>
            <Movie />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
