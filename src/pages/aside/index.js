import Styled from "./style";
import Backdrop from "../../components/Backdrop";
import { Transition } from "react-transition-group";

const Aside = (props) => {
  console.log(props);
  return (
    <Transition
      in={props.show}
      timeout={500}
      mountOnEnter
      unmountOnExit
      onEntering={() => console.log("entering")}
    >
      {(state) => (
        <Backdrop {...props}>
          <Styled state={{ state }}>...Aside</Styled>
        </Backdrop>
      )}
    </Transition>
  );
};

export default Aside;
