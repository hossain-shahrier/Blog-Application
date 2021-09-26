import styled from "styled-components";
import tw from "twin.macro";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  z-index: 1;
  ${tw`
    w-full
    h-16
    bg-white
    sticky
    top-0
    flex
    items-center
    shadow-sm
    
  `}
`;
const NavLeft = styled.div`
  flex: 3;
  ${tw`
    flex
    justify-center
  `}
`;
const NavCenter = styled.div`
  flex: 6;
`;
const TopList = styled.ul`
  ${tw`
  flex
  items-center
  justify-center
`}
`;
const TopListItem = styled.li`
  margin-right: 30px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;
const NavRight = styled.div`
  flex: 3;
  ${tw`
    flex
    items-center
    justify-center
  `}
`;
const TopImage = styled.img`
  border-radius: 50%;
  ${tw`
    w-6
    h-6
    object-cover
  `}
`;
const Navbar = () => {
  const user = false;
  return (
    <Container>
      <NavLeft>
        <FacebookIcon style={{ marginRight: "10px", cursor: "pointer" }} />
        <TwitterIcon style={{ marginRight: "10px", cursor: "pointer" }} />
        <PinterestIcon style={{ marginRight: "10px", cursor: "pointer" }} />
        <InstagramIcon />
      </NavLeft>
      <NavCenter>
        <TopList>
          <NavLink to="/">
            <TopListItem>Home</TopListItem>
          </NavLink>
          {/* <NavLink to="/about">
            <TopListItem>About</TopListItem>
          </NavLink>
          <NavLink to="/">
            <TopListItem>Contact</TopListItem>
          </NavLink> */}
          <NavLink to="/write">
            <TopListItem>Write</TopListItem>
          </NavLink>
          <NavLink to="/">
            <TopListItem>Blogs</TopListItem>
          </NavLink>
        </TopList>
      </NavCenter>
      <NavRight>
        {user ? (
          <TopImage
            src="https://avatars.githubusercontent.com/u/65191217?s=60&v=4"
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
        ) : (
          <>
            <TopList>
              <NavLink to="/login">
                <TopListItem>Login</TopListItem>
              </NavLink>
              <NavLink to="/register">
                <TopListItem>Register</TopListItem>
              </NavLink>
            </TopList>
          </>
        )}
        <SearchIcon style={{ marginRight: "10px", cursor: "pointer" }} />
        {user && <LogoutIcon />}
      </NavRight>
    </Container>
  );
};

export default Navbar;
