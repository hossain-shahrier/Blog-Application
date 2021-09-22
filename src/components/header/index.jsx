import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    mt-10
`}
`;
const HeaderTitles = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    font-serif
    text-gray-900
`}
`;
const HeaderTitle = styled.span`
  position: absolute;
  top: ${(props) => (props.size === "big" ? "18%" : "15%")};
  font-size: ${(props) => (props.size === "big" ? "150px" : "35px")};
`;
const HeaderImage = styled.img`
  height: 80vh;
  ${tw`
    w-full
    mt-20
    object-cover
  `}
`;
const Header = () => {
  return (
    <Container>
      <HeaderTitles>
        <HeaderTitle size="small">React & Node</HeaderTitle>
        <HeaderTitle size="big" style={{ color: "white" }}>
          Blog
        </HeaderTitle>
      </HeaderTitles>
      <HeaderImage
        src="https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      ></HeaderImage>
    </Container>
  );
};

export default Header;
