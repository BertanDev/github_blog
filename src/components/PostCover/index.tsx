import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {
    PostCoverContainer,
    TitleTime,
    PostCoverDescription
} from './styles'

export function PostCover({ issue }){
    const timeStamp = new Date(issue.created_at)

    const navigate = useNavigate()

    function handleOpenPost(){
        navigate('/post', {
            state: issue
        })
    }

    return(
        <PostCoverContainer onClick={handleOpenPost}>
            <TitleTime>
                <h3>{issue.title}</h3>
                <span>{formatDistanceToNow(timeStamp, {
                    addSuffix: true,
                    locale: ptBR
                })}</span>
            </TitleTime>

            <PostCoverDescription>
                {issue.body.substring(0,250)}
                {String(issue.body).length > 250 ? '...' : ''}
            </PostCoverDescription>
        </PostCoverContainer>
    )
}