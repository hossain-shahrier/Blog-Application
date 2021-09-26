import styled from "styled-components";
import tw from "twin.macro";
import Post from "../post";
const Container = styled.div`
  flex: 9;
  ${tw`
    flex
    flex-wrap
    m-12
  `}
`;
const Posts = () => {
  return (
    <Container>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Posts;
