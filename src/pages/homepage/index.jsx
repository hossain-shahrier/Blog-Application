import Header from "../../components/header";
import Navbar from "../../components/navbar";
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
      <Navbar />
      <Header />
      <Container>
        <Posts />
        <Sidebar />
      </Container>
    </>
  );
};

export default Home;
