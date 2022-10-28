import styled from "styled-components"

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem 2.5rem;

    width: 54rem;
    background: ${props => props.theme["base-profile"]};
    border-radius: 10px;
    height: 13.25rem;

    margin-top: -7rem;

    img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    flex: 1;
`

export const NameLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: ${props => props.theme.white};
        font-size: 1.5rem;
        font-weight: bold;
    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${props => props.theme.blue};
        font-size: 0.75rem;
        gap: 0.5rem;
    }
`

export const Description = styled.p`
    margin-top: 0.5rem;
    color: ${props => props.theme["base-text"]};
`

export const StatusProfile = styled.div`
    display: flex;
    margin-top: 1.5rem;
    gap: 1.5rem;
`

export const Status = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        color: ${props => props.theme["base-label"]};
    }

    span {
        color: ${props => props.theme["base-subtitle"]};
    }
`