import React from 'react';
import styled from "styled-components";

const SButton = styled.button`
  color: white;
`;

const Button = ({ children } : any) => <SButton style={{background: 'red'}}>{children}</SButton>;
export { Button };