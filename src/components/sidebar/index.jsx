import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import tw from "twin.macro";
const Container = styled.div`
  flex: 3;
  ${tw`
      m-5
      pb-8
      bg-gray-100
      rounded-xl
      flex
      flex-col
      items-center
    `}
`;
const SidebarItem = styled.div`
  ${tw`
      flex
      flex-col
      items-center
    `}
`;
const SidebarTitle = styled.span`
  /* border-top: 1px solid gray; */
  border-bottom: 1px solid gray;
  font-family: "Varela Round", sans-serif;
  line-height: 20px;
  text-align: center;
  ${tw`
      m-2
      p-1
      w-5/6
      text-gray-900
      font-semibold
      text-xl
      
    `}
`;
const SidebarImage = styled.img`
  ${tw`
      m-4
    `}
`;
const SidebarDetails = styled.p`
  ${tw`
      p-8
    `}
`;
const SidebarList = styled.ul`
  ${tw`
      m-8
    `}
`;
const SidebarListItem = styled.li`
  ${tw`
      inline-block
      w-3/6
      mt-4
      cursor-pointer
    `}
  &:hover {
    font-weight: 500;
  }
`;
const SidebarSocialIcons = styled.div`
  ${tw`
      w-64
      mt-4
      flex
      items-center
      justify-center
    `}
`;

const Sidebar = () => {
  return (
    <Container>
      <SidebarItem>
        <SidebarTitle>About me</SidebarTitle>
        <SidebarImage src="https://images.pexels.com/photos/3197392/pexels-photo-3197392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <SidebarDetails>
          Type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop public.
        </SidebarDetails>
      </SidebarItem>
      <SidebarItem>
        <SidebarTitle>Categories</SidebarTitle>
        <SidebarList>
          <SidebarListItem>Life</SidebarListItem>
          <SidebarListItem>Music</SidebarListItem>
          <SidebarListItem>Style</SidebarListItem>
          <SidebarListItem>Sports</SidebarListItem>
          <SidebarListItem>Technology</SidebarListItem>
        </SidebarList>
      </SidebarItem>
      <SidebarItem>
        <SidebarTitle>Follow us</SidebarTitle>
        <SidebarSocialIcons>
          <FacebookIcon style={{ marginRight: "10px", cursor: "pointer" }} />
          <TwitterIcon style={{ marginRight: "10px", cursor: "pointer" }} />
          <PinterestIcon style={{ marginRight: "10px", cursor: "pointer" }} />
          <InstagramIcon />
        </SidebarSocialIcons>
      </SidebarItem>
    </Container>
  );
};

export default Sidebar;
