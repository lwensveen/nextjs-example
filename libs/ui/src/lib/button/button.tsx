import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  text: string;
}

const StyledButton = styled.div`
  color: pink;
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton>
      <h1>{props.text}</h1>
    </StyledButton>
  );
}

export default Button;
