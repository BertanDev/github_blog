import styled from "styled-components";

export const ContainerPosts = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 54rem;
    gap: 2rem;

    margin-top: 3rem;
    margin-bottom: 3rem;
`

export const SearchContainer = styled.div`
    margin-top: 4.5rem;

    input {
        width: 54rem;
        padding: 0.75rem 1rem;
        background-color: ${props => props.theme["base-input"]};
        border-radius: 6px;
        border: 1px solid ${props => props.theme["base-border"]};
        color: ${props => props.theme["base-text"]};
        outline: 0;

        &::placeholder {
            color: ${props => props.theme["base-label"]};
        }

        &:focus {
            border: 1px solid ${props => props.theme["blue"]};
        }
    }
`

export const Label = styled.div`
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-size: 1.125rem;
        color: ${props => props.theme["base-subtitle"]};
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme["base-span"]};
    }
`