import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import fel from "../../public/images/fel.svg";
const Wrapper = styled.div`
  height: 80px;
  width: 355px;
  margin-top: 20px;
`;
const Bonjour = styled.div`
  display: flex;
  gap: 10px;
  font-size: 18px;
  font-weight:400;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
`;
const Felicitations = styled.div`
  display: flex;
  font-size: 16px;
  font-wieght: 500;
  margin-top: 10px;
`;
export function Greetings({ name }) {
  return (
    <Wrapper>
      <Header>
        <Bonjour>
          <h1>Bonjour</h1>
          <h1 className="name">{name}</h1>
        </Bonjour>
        <Felicitations>
          <img src={fel} alt="slogan"></img>
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
