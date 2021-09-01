import StyledHome from "./style";
import Button from "../../components/Button";
import Search from "../../assets/Search.svg";
import SearchBlack from "../../assets/Search_black.svg";
import Logo from "../../assets/Logo.svg";

const Home = (props) => {
  return (
    <StyledHome>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="title">
        <h1>Explore</h1>
      </div>
      <form className="search">
        <img className="search-icon" src={SearchBlack} alt="search" />
        <input className="search-input" type="search" placeholder="Search" />
        <Button className="search-button">
          <img className="search-button--icon" src={Search} alt="search" />
          <span className="search-button--text">Search</span>
        </Button>
      </form>
    </StyledHome>
  );
};

export default Home;
