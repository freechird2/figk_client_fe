import { TagType } from 'model/common'
import { useNavigate } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
import { StyledHashtag } from './index.styled'
interface HashtagProps {
    tags: TagType[]
    target: 'text' | 'art'
    word?: string
}

const Hashtag = ({ tags, target, word }: HashtagProps) => {
    // 태그 갯수 제한 : 5개
    const navigate = useNavigate()
    const SIZE = 5
    const moveSearch = (tagName: string) => {
        if (tagName && target) {
            localStorage.setItem('searchKeyword', tagName)
            navigate(`/${ROUTER_PATH.SEARCH}/${target}?search=${tagName}`)
        }
    }
    return (
        <StyledHashtag>
            {tags.slice(0, SIZE).map((hashtag: TagType, index: number) => {
                const { id, name } = hashtag
                return (
                    <li
                        key={id}
                        onClick={() => moveSearch(name)}>
                        {name.trim().toLowerCase() === word?.trim().toLocaleLowerCase() ? <mark>{name}</mark> : name}
                    </li>
                )
            })}
        </StyledHashtag>
    )
}

export default Hashtag
