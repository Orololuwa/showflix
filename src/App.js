import Globalstyles from "./Global";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import { Switch, Route } from "react-router";

function App() {
  return (
    <>
      <Globalstyles />
      <Layout>
        <Switch to="/" exact>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
