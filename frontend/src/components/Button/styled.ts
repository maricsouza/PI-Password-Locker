import { sizes } from '@/styles/global.type';
import styled from 'styled-components'



export const TButton = styled.button<ContentButton>`
    display: flex;
    font-size: ${(props) => props.fontSize ?? '0.8rem'};
    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.backgColor};
    width: ${(props) => props.size ?? sizes.large};
    height: 2.6rem;

    border: none;
    border-radius: 0.2rem;
    cursor: pointer;

    text-transform: uppercase;
    font-weight: 700;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    align-items: center;
    justify-content: center;

    margin: 0.61rem;
`