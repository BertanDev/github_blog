import styled from "styled-components"

export const PostCoverContainer = styled.div`
    width: 26rem;
    height: 16.25rem;

    background: ${props => props.theme["base-post"]};
    border-radius: 10px;
    padding: 2rem;
    outline: 1px solid transparent;
    cursor: pointer;

    &:hover {
        outline: 1px solid ${props => props.theme["base-label"]};
    }
`
export const TitleTime = styled.div`
    display: flex;
    flex: 1;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    

    h3 {
        color: ${props => props.theme.white};
        font-size: 1.25rem;
        max-width: 17.6875rem;
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme["base-span"]};
    }
`

export const PostCoverDescription = styled.p`
    margin-top: 1.25rem;
    color: ${props => props.theme["base-text"]};
    line-height: 160%;
`