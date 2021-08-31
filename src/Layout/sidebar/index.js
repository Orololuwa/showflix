import StyledSideBar from "./style";
import Logo from "../../assets/Logo.svg";
import Search from "../../assets/Search.svg";
import Heart from "../../assets/Heart_grey.svg";
import NavItem from "../../components/NavItem";

const Sidebar = (props) => {
  return (
    <StyledSideBar>
      <div className="logo-wrapper">
        <img src={Logo} alt="Showflix's Logo" className="logo" />
      </div>
      <NavItem className="navItem">
        <div className="icon">
          <img src={Search} alt="search" />
        </div>
        <span>Search</span>
      </NavItem>
      <NavItem className="navItem">
        <div className="icon">
          <img src={Heart} alt="heart" />
        </div>
        <span>Wishlist</span>
      </NavItem>
    </StyledSideBar>
  );
};

export default Sidebar;
