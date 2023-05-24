import styled from "styled-components";

interface FullInputProps {
  fullInput?: boolean;
}

export const InputType = styled.input<FullInputProps>`
  font-size: 0.8rem;

  padding: 0em 1.5em;
  width: ${(props) => (props.fullInput ? "45em" : "22em")};
  height: 3em;

  outline: none;
  box-shadow: none;
  border-color: transparent;

  background-color: #fff;
  border-radius: 0.4em;
  border: 1px solid #e1e3e5;
  color: #787880;
`;
