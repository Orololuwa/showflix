import { createGlobalStyle } from "styled-components";
import { grey, primaryFont } from "./theme";

const Globalstyles = createGlobalStyle`
*,
*::after,
*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    @media only screen and (min-width: 600px) {
        font-size: 75%;
    }
    @media only screen and (min-width: 768px) {
        font-size: 87.5%;
    }
    @media only screen and (min-width: 992px) {
        font-size: 100%;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 112.5%;
    }
    
}


body {
    transition: all 0.05s linear;
    width: 100%;
    height: 100vh;
    line-height: 2.1rem;
    font-family: ${primaryFont};
    font-style: normal;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

input {
    outline: none;
    border: none;
    background-color: ${grey[100]};
    padding: 1.5rem 1rem;
    border-radius: 15px;
    color: ${grey[200]};

    &::placeholder{
        color: ${grey[200]};
    }
    
    @media only screen and (min-width: 600px){
        padding: 1rem .75rem;
    }
}

button {
    outline: none;
    border: none;
}

}
  
`;

export default Globalstyles;
