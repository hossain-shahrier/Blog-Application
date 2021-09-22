import styled from "styled-components";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const Container = styled.div`
  flex: 9;
`;
const PostWrapper = styled.div``;
const PostImage = styled.img``;
const PostTitle = styled.h1``;
const PostAction = styled.div``;
const InfoContainer = styled.div``;
const Author = styled.span``;
const Date = styled.span``;
const Description = styled.p``;
const SinglePost = () => {
  return (
    <Container>
      <PostWrapper>
        <PostImage
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <PostTitle>Music with react</PostTitle>
        <PostAction>
          <EditOutlinedIcon />
          <DeleteOutlineOutlinedIcon />
        </PostAction>
        <InfoContainer>
          <Author>
            Author : <b>Shahrier</b>
          </Author>
          <Date>1 hour ago</Date>
          <Description>
            he point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.{" "}
          </Description>
        </InfoContainer>
      </PostWrapper>
    </Container>
  );
};

export default SinglePost;
