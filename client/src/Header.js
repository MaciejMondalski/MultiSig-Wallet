import React from "react";
import styled from "styled-components";

const Header = ({ approvers, quorum }) => {
  return (
    <StyledHeader>
      <ul>
        <li>Approvers: {approvers.join(", ")}</li>
        <li>Quorum: {quorum} </li>
      </ul>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  font-family: "Press Start 2P", cursive;
  margin: 0.5rem;
  border: 3px solid black;
  background: #faffe5;
  li {
    padding: 0.5rem 0;
  }
`;

export default Header;
