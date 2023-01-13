import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border: 1px solid grey;
`;

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <h1>Welcome to Footer!</h1>
    </StyledFooter>
  );
}

export default Footer;
