import styled from "styled-components";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import tw from "twin.macro";
const Container = styled.div`
  flex: 9;
`;
const PostWrapper = styled.div`
  ${tw`
    p-5
    pr-0
`}
`;
const PostImage = styled.img`
  ${tw`
    w-full
    h-80
    rounded-sm
    object-cover
`}
`;
const PostTitle = styled.h1`
  text-align: center;
  font-family: serif;
  font-size: 40px;
  margin-bottom: 25px;
`;
const PostAction = styled.div`
  float: right;
`;
const InfoContainer = styled.div`
  font-size: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
  font-family: "Varela Round", sans-serif;
`;
const Author = styled.span``;
const Date = styled.span``;
const Description = styled.p`
  font-family: serif;
  font-size: 19px;
  line-height: 25px;
  :first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`;
const SinglePost = () => {
  return (
    <Container>
      <PostWrapper>
        <PostImage
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <PostTitle>
          Music with react
          <PostAction>
            <EditOutlinedIcon
              color="primary"
              style={{ cursor: "pointer", marginRight: "10px" }}
            />
            <DeleteOutlineOutlinedIcon
              color="error"
              style={{ cursor: "pointer" }}
            />
          </PostAction>
        </PostTitle>
        <InfoContainer>
          <Author>
            Author : <b>Shahrier</b>
          </Author>
          <Date>1 hour ago</Date>
        </InfoContainer>
        <Description>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text, and a search for 'lorem ipsum' will uncover many web sites
          still in their infancy. he point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. he point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
        </Description>
      </PostWrapper>
    </Container>
  );
};

export default SinglePost;
