import styled from 'styled-components';
import { NavLink } from "react-router-dom"
import logo from "../../public/images/logo.png"
import PropTypes from "prop-types";

const Head = styled.header`
  position: relative;
  display: flex;
  align-items:center;
  max-width: 1080px;
  height: 91px;
  background: #020203;
  padding: 0 87px 0 29px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  img {
    width: 158px;
    margin-right: 150px;
    height:65px;
  }
`;
const Nav = styled.nav`
  width: 60vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
    font-weight: 500;
    font-size: 24px;
    text-decoration:none;
  }
`;

export const  Header = ()=>{
    return(
        <Head>
            <img src= {logo} alt="logo"/>
            <Nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="#">Profil</NavLink>
                <NavLink to="#">Réglage</NavLink>
                <NavLink to="#">Communauté</NavLink>
            </Nav>
        </Head>
        
    )
}
