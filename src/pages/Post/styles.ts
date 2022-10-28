import styled from "styled-components"

export const PostHeader = styled.div`
    width: 54rem;
    height: 10.5rem;
    margin-top: -5.25rem;
    padding: 2rem;
    background: ${props => props.theme["base-profile"]};
`
export const NavHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
            color: ${props => props.theme.blue};
            width: 13px;
            height: 13px;
        }

        span {
            font-size: 0.75rem;
            color: ${props => props.theme.blue};
        }
    }

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        span {
            font-size: 0.75rem;
            color: ${props => props.theme.blue};
        }

        svg {
            color: ${props => props.theme.blue};
            width: 13px;
            height: 13px;
        }
    }
`

export const TitlePost = styled.p`
    margin-top: 1.25rem;

    font-size: 1.5rem;
    color: ${props => props.theme.white};
`

export const PostItems = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme["base-span"]};
    gap: 2rem;
    margin-top: 0.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`
export const BodyContainer = styled.main`
    padding: 2.5rem 2rem;
    width: 54rem;
    color: ${props => props.theme["base-text"]};

    font-size: 1rem;
    line-height: 25.6px;

    p {
      margin-bottom: 1rem;
    }
    ul {
      margin-left: 1.1rem;  
      li + li {
        margin-bottom: 1rem;
      }
    }
    img {
      width: 100%;
    }
    a {
      color: ${(props) => props.theme.blue};
    }

    h1, h2, h3 { 
        margin-bottom: 1rem;
    }
`