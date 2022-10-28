import headerImg from '../../assets/cover.svg'

import {
    HeaderContainer
} from './styles'

export function Header(){
    return(
        <HeaderContainer>
            <img src={headerImg} alt="Header da aplicação, com a logo e escrito GITHUB BLOG" />
        </HeaderContainer>
    )
}