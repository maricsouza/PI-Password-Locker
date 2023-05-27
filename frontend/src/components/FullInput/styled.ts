import styled from "styled-components";

interface FullInputProps {
  fullInput?: boolean;
}

export const InputType = styled.input<FullInputProps>`
  font-size: 2em;
  padding: 0em 1.5em;
  width: ${(props) => (props.fullInput ? "300px" : "440px")};
  height: 7vh;
  outline: none;
  box-shadow: none;
  border-color: transparent;
  background-color: #fff;
  border-radius: 0.2em;
  border: 1px solid #e1e3e5;
  color: #989899;
`;
