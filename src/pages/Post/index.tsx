import {
    faChevronLeft,
    faArrowUpRightFromSquare,
    faCalendarDay,
    faComment
} from "@fortawesome/free-solid-svg-icons";

import { FaGithub } from 'react-icons/fa'
  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from "date-fns/locale";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {
    PostHeader,
    NavHeader,
    PostItems,
    BodyContainer,
    TitlePost
} from './styles'

export function Post(){
    const location = useLocation()
    const post = location.state

    const dateDistance = formatDistanceToNow(new Date(post.created_at), {
        addSuffix: true,
        locale: ptBR
    })

    const markdown = post.body

    console.log(post)

    return(
        <>
            <PostHeader>
                <NavHeader>
                    <NavLink to='/'>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        <span>Voltar</span>
                    </NavLink>

                    <a href={post.html_url}>
                        <span>VER NO GITHUB</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </a>
                </NavHeader>

                <TitlePost>{post.title}</TitlePost>

                <PostItems>
                    <div>
                        <FaGithub size={17}/>
                        <span>{post.user.login}</span>
                    </div>
                        
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay}/>
                        <span>{dateDistance}</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faComment}/>
                        <span>{post.comments} comentários</span>
                    </div>
                </PostItems>
            </PostHeader>

            <BodyContainer>
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>
            </BodyContainer>
        </>
    )
}