import { NavLink } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
const Container = styled.div`
  height: 93vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  ${tw`
    flex
    flex-col
    justify-center
    items-center
`}
`;
const RegisterTitle = styled.span`
  font-size: 50px;
`;
const RegisterForm = styled.form`
  ${tw`
    mt-5
    flex
    flex-col
`}
`;
const InputLabel = styled.label`
  ${tw`
    mt-2.5
    mb-2.5
`}
`;
const Input = styled.input`
  ${tw`
    p-2.5
    bg-white
`}
`;
const RegisterButton = styled.button`
  ${tw`
    mt-5
    cursor-pointer
    bg-red-400
    text-white
    rounded-xl
    p-2.5
`}
`;
const LoginButton = styled.button`
  top: 80px;
  right: 20px;
  ${tw`
    absolute
    bg-green-700
    cursor-pointer
    p-2.5
    text-white
    rounded-xl
`}
`;
const Register = () => {
  return (
    <Container>
      <RegisterTitle>Register</RegisterTitle>
      <RegisterForm>
        <InputLabel>Username</InputLabel>
        <Input type="text" placeholder="Enter your name" />
        <InputLabel>Email</InputLabel>
        <Input type="email" placeholder="Enter your email" />
        <InputLabel>Password</InputLabel>
        <Input type="password" placeholder="Enter your password" />
        <RegisterButton>Register</RegisterButton>
        <NavLink to="/login">
          <LoginButton>Login</LoginButton>
        </NavLink>
      </RegisterForm>
    </Container>
  );
};

export default Register;
