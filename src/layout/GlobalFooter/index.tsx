import { ItoastState, toastState } from 'Recoil/Atom/toast'
import useCopy from 'hook/useCopy'
import useCursor from 'hook/useCursor'
import { useSetRecoilState } from 'recoil'
import { StyledFooter } from './index.styled'

const INSTAGRAM_URL = 'https://www.instagram.com/figk.official'
const GlobalFooter = () => {
    const { enter, leave } = useCursor()
    const [isCopy, onCopy] = useCopy()
    const setShowToast = useSetRecoilState<ItoastState>(toastState)
    const onShared = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        onCopy('figk@fig.xyz')
        setShowToast((prev) => ({ text: '이메일 주소가 복사되었습니다.', render: true }))
    }
    return (
        <StyledFooter>
            <span className='font_work'>©2022 FIG. ALL RIGHT RESERVED.</span>
            <div>
                <a
                    onMouseEnter={() => enter('action')}
                    onMouseLeave={leave}
                    onClick={(e) => onShared(e)}>
                    figk@fig.xyz
                </a>
                <a
                    href={INSTAGRAM_URL}
                    target='_blank'
                    onMouseEnter={() => enter('action')}
                    onMouseLeave={leave}
                    rel='noreferrer'>
                    Instagram
                </a>
            </div>
        </StyledFooter>
    )
}

export default GlobalFooter
