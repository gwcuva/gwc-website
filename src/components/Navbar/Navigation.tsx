import React from 'react';
import styled from 'styled-components';
import { color } from '../../const';

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: ${color["orange"]};
  color: ${color["white"]};
`;

export default Navigation;
