import styled from "styled-components";
import tw from "twin.macro";
import Sidebar from "../../components/sidebar";
import SinglePost from "../../components/singlepost";

const Container = styled.div`
  ${tw`flex`}
`;
const PostPage = () => {
  return (
    <>
      <Container>
        <SinglePost />
        <Sidebar />
      </Container>
    </>
  );
};

export default PostPage;
