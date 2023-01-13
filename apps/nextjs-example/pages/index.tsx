import { Footer, Header } from '@nextjs-example/ui';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <Header></Header>
      <div>
        <h1>Content</h1>
      </div>
      <Footer></Footer>
    </StyledPage>
  );
}

export default Index;
