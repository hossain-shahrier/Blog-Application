import styled from "styled-components";
import Navbar from "../../components/navbar";

import tw from "twin.macro";
import Sidebar from "../../components/sidebar";
import SinglePost from "../../components/singlepost";

const Container = styled.div`
  ${tw`flex`}
`;
const PostPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <SinglePost />
        <Sidebar />
      </Container>
    </>
  );
};

export default PostPage;
