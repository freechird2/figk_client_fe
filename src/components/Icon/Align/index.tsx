import { IconAlign } from './index.styled'
interface AlignTypes {
    action: boolean
    onClick: () => void
    onMouseEnter: (e: React.MouseEvent) => void
    onMouseLeave: (e: React.MouseEvent) => void
}
const Align = ({ action, onClick, onMouseEnter, onMouseLeave }: AlignTypes) => {
    return (
        <IconAlign
            className={action ? 'block' : 'inline'}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div className='wrapper block overflow'>
                <div className='blockBox'>
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
            </div>
            <div className='wrapper inline'>
                <div className='inlineBox'>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </IconAlign>
    )
}

export default Align
