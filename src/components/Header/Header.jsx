import logo from "../../images/logo.png";
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Div>
      <Link to="/">
        {" "}
        <Img src={logo} alt="logo" />
      </Link>
      <ThemeTogglerButton />
    </Div>
  );
};

const Div = styled.header`
  padding: 10px 30px 30px 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media(max-width: 500px){
    align-items: center;
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 200px;
`;

export { Header };
