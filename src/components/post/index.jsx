import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  width: 390px;
  margin: 20px;
  display: flex;
`;
const PostContainer = styled.div`
  background-color: whitesmoke;
  padding: 15px;
  ${tw`
    rounded-xl
`}
`;
const PostImage = styled.img`
  ${tw`
    w-full
    h-72
    object-cover
`}
`;
const PostInfo = styled.div`
  ${tw`
    flex
    flex-col
    items-center
`}
`;
const PostCategories = styled.div``;
const PostCategory = styled.span`
  font-family: "varela Round", sans-serif;
  font-size: 11px;
  ${tw`
    text-yellow-400
    mt-4
    mr-2.5
    cursor-pointer
`}
`;
const PostTitle = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  ${tw`
    mt-4
    cursor-pointer
`}
`;
const Hr = styled.hr``;
const PostDate = styled.span`
  font-family: serif;
  font-style: italic;
  font-size: 13px;
  ${tw`
    mt-4
    text-gray-500
`}
`;
const PostDescription = styled.p`
  margin-top: 15px;
  font-family: "varela Round", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
const Post = () => {
  return (
    <Container>
      <PostContainer>
        <PostImage
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <PostInfo>
          <PostCategories>
            <PostCategory>Music</PostCategory>
            <PostCategory>Life</PostCategory>
          </PostCategories>
          <PostTitle>Music with React</PostTitle>
          <Hr />
          <PostDate>1 hour ago</PostDate>
        </PostInfo>
        <PostDescription>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text, and a search for 'lorem ipsum' will uncover many web sites
          still in their infancy.
        </PostDescription>
      </PostContainer>
    </Container>
  );
};

export default Post;
