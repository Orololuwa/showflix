import { createGlobalStyle } from "styled-components";
import { black, blue, grey, primaryFont, typeScale } from "./theme";

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

.active {
    cursor: pointer;
    transition: all 0.8s;

    .icon {
      background-color: ${blue[100]};

      img {
        width: 100%;
        fill: blue;
      }
    }

    span {
      font-weight: 600;
      color: ${black[100]};
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 6.5px;
      border-radius: 10px;
      height: 80%;
      background-color: ${blue[100]};
    }
  }

  
  h1 {
    line-height: 4.3rem;
    font-size: ${typeScale.header1};
    }
    h2 {
        line-height: 2.8rem;
        font-size: ${typeScale.header2};
    }
    h3 {font-size: ${typeScale.header3};}
    h4 {font-size: ${typeScale.header4};}
    h5 {font-size: ${typeScale.header5};}

    }
  
`;

export default Globalstyles;
