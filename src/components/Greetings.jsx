import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Wrapper = styled.div`
width:1000px;
height:100px;
margin-top:50px;

`
const Bonjour = styled.div`
display:flex;
gap:20px;
font-size:26px;
`
const Header = styled.div`
display:flex;
flex-direction:column;
`
const Felicitations = styled.div`
display:flex;
font-size:20px;
font-wieght:500;
margin-top:10px;
`
export function Greetings({ name }) {
  return (
    <Wrapper>
      <Header>
        <Bonjour>
          <h1>Bonjour</h1>
          <h1 className="name">{name}</h1>
        </Bonjour>
        <Felicitations>
          Félicitations! Vous avez explosé votre objectif hier!
        </Felicitations>
      </Header>
    </Wrapper>
  );
}

Greetings.propTypes = {
  name: PropTypes.string,
};
Greetings.defaut = {
  name: "default name",
};
