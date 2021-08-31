import Sidebar from "./sidebar";
import Styled from "./Style";

const Layout = (props) => {
  return (
    <Styled>
      <Sidebar />
      <div className="theContent">{props.children}</div>
    </Styled>
  );
};

export default Layout;
