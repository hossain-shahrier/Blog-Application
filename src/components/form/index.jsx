import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import tw from "twin.macro";
const Container = styled.div`
  ${tw`
    pt-10
    `}
`;
const FormImage = styled.img`
  width: 70vw;
  ${tw`
    ml-36
    h-64
    rounded-xl
    object-cover
    `}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  /* position: relative; */
`;
const FormGroup = styled.div`
  ${tw`
    flex
    mt-2.5
    ml-32
    items-center
    `}
`;
const FormFileInput = styled.input`
  ${tw`
    hidden
    `}
`;
const FormInput = styled.input`
  font-size: large;
  border: 1px solid lightgray;
  ${tw`
    p-2
    outline-none
    overflow-hidden
    `}
`;
const FormInputLabel = styled.label``;
const FormTextArea = styled.textarea`
  font-size: 15px;
  border: 1px solid lightgray;
  width: 50%;
  height: 300px;
  outline: none;
`;
const Button = styled.button`
  /* position: absolute; */
  width: 5%;
  margin-top: 10px;
  margin-left: 128px;
  padding: 10px;
  color: white;
  background-color: teal;
`;
const FormComponent = () => {
  return (
    <Container>
      <FormImage src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Form>
        <FormGroup>
          <FormInputLabel htmlFor="fileInput">
            <AddIcon
              style={{
                borderRadius: "50%",
                border: "1px solid gray",
                width: "30px",
                height: "30px",
                marginRight: "10px",
              }}
            />
          </FormInputLabel>
          <FormFileInput type="file" name="" id="fileInput" />
          <FormInput
            type="text"
            placeholder="Write your title"
            autoFocus={true}
          />
        </FormGroup>
        <FormGroup>
          <FormTextArea placeholder="Tell your story..." />
        </FormGroup>
        <Button type="submit">Publish</Button>
      </Form>
    </Container>
  );
};

export default FormComponent;
