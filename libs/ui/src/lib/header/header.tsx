import styled from 'styled-components';
import Button from '../button/button';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border: 1px solid grey;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <img />
      <Button text={'Home'}></Button>
    </StyledHeader>
  );
}

export default Header;
