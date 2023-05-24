import styled from 'styled-components'

interface FullInputProps {
    fullInput?: boolean;
}

export const InputType = styled.input<FullInputProps>`

        font-size: 0.8rem;

        padding: 0em 1.5em;
        width: ${(props) => props.fullInput ? "45em" : "22em" } ;
        height: 3em;

        outline: none;
        box-shadow: none;
        border-color: transparent;


        background-color: #FFF;
        border-radius: 0.4em;
        border: 1px solid #E1E3E5;
        color: #787880

`;

export const InputClass = styled.div`

    margin: 0.3em;

    .title {
        font-size: 1em;
        color: #787880;
        margin-bottom: 0.5rem;
        font-weight: 600;
}
`