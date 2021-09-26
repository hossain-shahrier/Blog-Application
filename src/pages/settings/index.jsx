import styled from "styled-components";
import tw from "twin.macro";
import Sidebar from "../../components/sidebar";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
const Container = styled.div`
  ${tw`
    flex
`}
`;
const Wrapper = styled.div`
  flex: 9;
  padding: 20px;
`;
const SettingsTitle = styled.div`
  ${tw`
    flex
    items-center
    justify-between
`}
`;
const SettingsUpdateTitle = styled.span`
  font-size: 30px;
  ${tw`
    mb-5
    text-red-400
`}
`;
const SettingsDeleteTitle = styled.span`
  font-size: 12px;
  ${tw`
    text-red-800
    cursor-pointer
`}
`;
const SettingsFrom = styled.form`
  ${tw`
    flex
    flex-col
`}
`;
const ProfilePictureLabel = styled.label``;
const ProfilePicture = styled.div`
  ${tw`
    flex
    items-center
    mt-2.5
    mb-2.5
`}
`;
const ProfileImage = styled.img`
  border-radius: 10%;
  ${tw`
    w-16
    object-cover
`}
`;
const FileInputLable = styled.label``;
const FileInput = styled.input`
  display: "none";
`;
const InputLabel = styled.label`
  font-size: 20px;
  ${tw`
    mt-5
`}
`;
const Input = styled.input`
  ${tw`
    text-gray-700
    mt-2.5
    mb-2.5
    h-8
    outline-none
    border-b-2
`}
`;
const Button = styled.button`
  align-self: center;
  ${tw`
    w-36
    rounded-xl
    text-white
    bg-green-700
    p-2
    mt-5
    cursor-pointer
`}
`;
const Settings = () => {
  return (
    <Container>
      <Wrapper>
        <SettingsTitle>
          <SettingsUpdateTitle>Update your account</SettingsUpdateTitle>
          <SettingsDeleteTitle>Delete your account</SettingsDeleteTitle>
        </SettingsTitle>
        <SettingsFrom>
          <ProfilePictureLabel>Profile Picture</ProfilePictureLabel>
          <ProfilePicture>
            <ProfileImage
              src="https://media.istockphoto.com/photos/first-person-point-of-view-of-a-woman-paddling-on-a-stand-up-paddle-picture-id1288844330?b=1&k=20&m=1288844330&s=170667a&w=0&h=nckXG0H5kPDbgDpC8iTObsiqG7Jwt6CeLuJ2WxdOTp4="
              alt=""
            />
            <FileInputLable htmlFor="fileInput">
              <ManageAccountsIcon
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  cursor: "pointer",
                  backgroundColor: "black",
                  borderRadius: "20px",
                  marginLeft: "10px",
                }}
              />
            </FileInputLable>
            <FileInput type="file" id="fileInput" style={{ display: "none" }} />
          </ProfilePicture>
          <InputLabel>Username</InputLabel>
          <Input type="text" placeholder="Shahrier" />
          <InputLabel>Email</InputLabel>
          <Input type="email" placeholder="hossainshahrier.sh@gmail.com" />
          <InputLabel>Password</InputLabel>
          <Input type="password" />
          <Button type="submit">Update</Button>
        </SettingsFrom>
      </Wrapper>
      <Sidebar />
    </Container>
  );
};

export default Settings;
