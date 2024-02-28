import { ItoastState, toastState } from 'Recoil/Atom/toast'

import API from 'api'
import Hashtag from 'components/Hashtag'
import { HighlightedText } from 'components/HighlightedText'
import Icon from 'components/Icon'
import IconHeart from 'components/Icon/Heart'
import IconMore from 'components/Icon/More'
import { Variants } from 'framer-motion'
import { getWeekPad, 에디터특수기호변경 } from 'function/common'
import { getFigkCookie, setFigkCookie } from 'function/home'
import useCursor from 'hook/useCursor'
import useTMutation from 'hook/useMutation'
import { useOutsideClick } from 'hook/useOutsideClick'
import { TextFigkModel } from 'model/home'
import { useState } from 'react'
// import CopyToClipboard from 'react-copy-to-clipboard'
import useCopy from 'hook/useCopy'
import useWidth from 'hook/useWidth'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { ROUTER_PATH } from 'router'
import { S } from './index.styled'

interface ITextFigkCard {
    variants?: Variants
    data?: TextFigkModel
    isWriter?: boolean
    word?: string
}

export const TextFigkCard = ({ variants, data, isWriter, word }: ITextFigkCard) => {
    const { media } = useWidth()
    const [isCopy, onCopy] = useCopy()
    const { enter, leave } = useCursor()
    const [showUtil, setShowUtil] = useState<boolean>(false)
    const moreRef = useOutsideClick(() => setShowUtil(false))
    const navigate = useNavigate()
    const setShowToast = useSetRecoilState<ItoastState>(toastState)

    const onSuccessIncreaseShard = () => {
        if (data?.id) setFigkCookie({ target: 'text', type: 'shared', id: data.id })
    }

    const { mutate: increaseShared } = useTMutation(
        ['@increaseTextFigkShared', String(data?.id)],
        (id: number) => API.Figk.increaseTextFigkShared(id),
        onSuccessIncreaseShard
    )

    const copyAndIncreaseShareCount = () => {
        if (data?.id && !getFigkCookie({ target: 'text', type: 'shared', id: data.id })) {
            increaseShared(data.id)
        }
        onCopy(`${document.location.origin}/shared/text?id=${data!.id}`)
        setShowToast((prev) => ({ text: '공유 링크가 복사되었습니다.', render: true }))
        setShowUtil(false)
    }

    const onMoveOrigin = (url: string) => {
        if (!url) return
        window.open(url, '_blank')
    }
    const showingUtilBox = () => {
        setShowUtil(!showUtil)
    }

    return (
        <>
            {data && (
                <S.Container variants={variants}>
                    <small className='font_work'>{`Vol.${getWeekPad(data.week)}`}</small>
                    <h1>
                        <HighlightedText
                            text={에디터특수기호변경(data.title)}
                            query={word}
                        />
                    </h1>
                    <h2>
                        <HighlightedText
                            text={에디터특수기호변경(data.subTitle)}
                            query={word}
                        />
                    </h2>
                    <p>
                        <HighlightedText
                            text={에디터특수기호변경(data.content)}
                            query={word}
                        />
                    </p>
                    {data.tag && (
                        <Hashtag
                            tags={data.tag}
                            word={word}
                            target='text'
                        />
                    )}

                    <S.Footer>
                        <span>
                            <HighlightedText
                                text={data.authorName}
                                query={word}
                            />
                        </span>
                        <div className='wiget'>
                            <div className='dotdotdot'>
                                <IconMore
                                    onClick={showingUtilBox}
                                    onMouseEnter={() => enter('action')}
                                    onMouseLeave={leave}
                                />
                                {showUtil && (
                                    <S.Util ref={moreRef}>
                                        {/* <CopyToClipboard
                                            text={`${document.location.origin}/shared/text?id=${data.id}`}
                                            onCopy={onCopy}> */}
                                        <div
                                            className='util_Item'
                                            onClick={copyAndIncreaseShareCount}
                                            onMouseEnter={() => enter('action')}
                                            onMouseLeave={leave}>
                                            <Icon
                                                icon='copy'
                                                size={22}
                                            />
                                            공유하기
                                        </div>
                                        {/* </CopyToClipboard> */}
                                        <div
                                            className='util_Item'
                                            onMouseEnter={() => enter('action')}
                                            onMouseLeave={leave}
                                            onClick={() => onMoveOrigin(data.link)}>
                                            <Icon
                                                icon='go'
                                                size={22}
                                            />
                                            관련 페이지로 이동
                                        </div>
                                        {!isWriter && (
                                            <div
                                                className='util_Item'
                                                onClick={() => navigate(`/${ROUTER_PATH.WRITER}?id=${data.authorId}`)}
                                                onMouseEnter={() => enter('action')}
                                                onMouseLeave={leave}>
                                                <Icon
                                                    icon='user'
                                                    size={22}
                                                />
                                                핔커 소개
                                            </div>
                                        )}
                                    </S.Util>
                                )}
                            </div>
                            <IconHeart
                                id={data.id}
                                onMouseEnter={() => enter('action')}
                                onMouseLeave={leave}
                            />
                        </div>
                    </S.Footer>
                </S.Container>
            )}
        </>
    )
}

export default TextFigkCard
