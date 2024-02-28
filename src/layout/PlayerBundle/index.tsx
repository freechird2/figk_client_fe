import { ItoastState, toastState } from 'Recoil/Atom/toast'
import API from 'api'
import Hashtag from 'components/Hashtag'
import { HighlightedText } from 'components/HighlightedText'
import Icon from 'components/Icon'
import { getWeekPad } from 'function/common'
import { getFigkCookie, setFigkCookie } from 'function/home'
import useCopy from 'hook/useCopy'
import useTMutation from 'hook/useMutation'
import { ArtFigkModel } from 'model/home'
import { MotionVariants } from 'pages/ArtFigk/motion'
import { PropsWithChildren } from 'react'
import { useSetRecoilState } from 'recoil'
import theme from 'theme'
import { PlayerBundleThemeType, S } from './index.styled'
export interface PlayerBundleProps extends PropsWithChildren {
    /**박스 컬러 타입  : "dark" | "light" */
    type?: PlayerBundleThemeType
    data: ArtFigkModel
    word?: string
    index?: number
}

const PlayerBundle = ({ type = 'light', data, word, index = 0, children }: PlayerBundleProps) => {
    const [isCopy, onCopy] = useCopy()
    const setShowToast = useSetRecoilState<ItoastState>(toastState)

    const onSuccessIncreaseShard = () => {
        if (data.id) setFigkCookie({ target: 'art', type: 'shared', id: data.id })
    }

    const { mutate: increaseShared } = useTMutation(
        ['@increaseArtFigkShared', String(data.id)],
        (id: number) => API.artFiGk.increaseArtFigkShare(id),
        onSuccessIncreaseShard
    )

    const onShared = () => {
        if (data.id && !getFigkCookie({ target: 'art', type: 'shared', id: data.id })) {
            increaseShared(data.id)
        }
        onCopy(`${document.location.origin}/shared/art?id=${data.id}`)
        setShowToast({ text: '공유 링크가 복사되었습니다.', render: true })
    }

    return (
        <S.Wrapper type={type}>
            <S.Container variants={MotionVariants.list}>
                <S.Category>
                    <span>Vol.{getWeekPad(data.week)}</span>
                    <span>
                        <HighlightedText
                            text={data.title}
                            query={word}
                        />
                    </span>
                </S.Category>

                {children}
                <S.PlayerFooter>
                    {data.tag.length > 0 && (
                        <S.HashtagBox>
                            <Hashtag
                                tags={data.tag}
                                word={word}
                                target='art'
                            />
                        </S.HashtagBox>
                    )}
                    <S.Shared
                        className={type}
                        onClick={onShared}>
                        <Icon
                            icon='copy'
                            size={18}
                            fill={type === 'dark' ? theme.palette.gray30 : theme.palette.gray70}
                        />
                        공유하기
                    </S.Shared>
                </S.PlayerFooter>
            </S.Container>
        </S.Wrapper>
    )
}

export default PlayerBundle
