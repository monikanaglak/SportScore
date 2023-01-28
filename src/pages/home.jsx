import { Header } from "../components/Header";
import { Asside } from "../components/Asside";
import { Choice_of_user } from "../components/Choice_of_user";
import styled from 'styled-components';
const Head = styled.header`
  position: relative;
  display: flex;
  align-items:center;
  max-width: 1080px;
  height: 91px;
  background: #020203;
  padding: 0 87px 0 29px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  img {
    width: 158px;
    margin-right: 150px;
    height:65px;
  }
`;
const Container = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: auto;
  margin-top:5px;
`;
export function Home() {
  return (
    <Container>
      <Head>
      <Header />
      </Head>
      <div className="flex">
        <Asside />
        <Choice_of_user />
      </div>
    </Container>
  );
}
