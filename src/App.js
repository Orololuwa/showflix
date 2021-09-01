import Globalstyles from "./Global";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Globalstyles />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
