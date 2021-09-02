import Style from "./style";

const NavItem = (props) => {
  return (
    <Style activeClassName="active" {...props}>
      {props.children}
    </Style>
  );
};

export default NavItem;
