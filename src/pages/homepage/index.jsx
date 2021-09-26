import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Posts from "../../components/posts";

import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
flex
`}
`;
const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Posts />
        <Sidebar />
      </Container>
    </>
  );
};

export default Home;
