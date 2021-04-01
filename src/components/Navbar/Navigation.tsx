import styled from 'styled-components';
import { color } from '../../const';

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${color["orange"]};
  padding: 30px 45px 25px 45px;
`;

export default Navigation;
