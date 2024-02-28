import { StyledDelete } from 'components/Icon/Delete/index.styled'
import useCursor from 'hook/useCursor'
interface IconDeleteTypes {
    onClick: () => void
}
const IconDelete = ({ onClick }: IconDeleteTypes) => {
    const { enter, leave } = useCursor()
    return (
        <StyledDelete
            onClick={onClick}
            onMouseEnter={() => enter('action')}
            onMouseLeave={leave}
        />
    )
}

export default IconDelete
