import { CursorState, CursorStateTypes } from 'Recoil/Atom/cursor'
import useCursor from 'hook/useCursor'
import useWidth from 'hook/useWidth'
import { S } from 'layout/WriterTitle/index.styled'
import { SnsTypes } from 'model/common/author'
import { AuthorModel } from 'model/writer'
import { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
interface WriterTitleTypes {
    author: AuthorModel
    height: string
}
const WriterTitle = ({ author, height }: WriterTitleTypes) => {
    const { enter, leave } = useCursor()
    const cursorRef = useRef<HTMLDivElement>(null)
    const cursorForm = useRecoilValue<CursorStateTypes>(CursorState)
    const { width, media } = useWidth()

    useEffect(() => {
        const mouseOver = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const mouseX = cursorRef.current !== null ? clientX - cursorRef.current.clientWidth / 2 : 0
            const mouseY = cursorRef.current !== null ? clientY - cursorRef.current.clientHeight / 2 : 0
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
            }
        }
        window.addEventListener('mousemove', (e) => {
            return mouseOver(e)
        })
        return () => {
            window.removeEventListener('mousemove', (e) => {
                mouseOver(e)
            })
        }
    }, [])
    const snsHideRenderCondition = author.instagram === '' && author.homepage === '' && author.blog === ''
    return (
        <S.Container
            height={height ?? 'initial'}
            onMouseEnter={() => enter('hide')}
            onMouseLeave={leave}>
            {!media.tabletH && (
                <S.CursorBox ref={cursorRef}>
                    <S.Cursor className={cursorForm === 'hide' ? 'scaleUp' : ''} />
                </S.CursorBox>
            )}

            <div className='contents'>
                <S.Artist isSNS={!snsHideRenderCondition}>
                    <h1>{author.nickname}</h1>
                    {width <= 1200 && !snsHideRenderCondition && (
                        <SNS
                            blog={author.blog}
                            instagram={author.instagram}
                            homepage={author.homepage}
                        />
                    )}
                    <S.ArtistDesc>{author.introduction}</S.ArtistDesc>
                </S.Artist>
            </div>
            {width > 1200 && (
                <div className='contents lastLayer'>
                    <S.Artist isSNS={!snsHideRenderCondition}>
                        {!snsHideRenderCondition && (
                            <SNS
                                blog={author.blog}
                                instagram={author.instagram}
                                homepage={author.homepage}
                            />
                        )}
                    </S.Artist>
                </div>
            )}
        </S.Container>
    )
}

export default WriterTitle

const SNS = ({ instagram, blog, homepage }: SnsTypes) => {
    return (
        <div className='sns'>
            {instagram && (
                <a
                    href={instagram}
                    target='_blank'
                    title='작가의 Instagram 페이지 이동'
                    rel='noopener noreferrer'>
                    Instagram
                </a>
            )}
            {blog && (
                <a
                    href={blog}
                    target='_blank'
                    title='작가의 Blog 페이지 이동'
                    rel='noreferrer'>
                    Blog
                </a>
            )}
            {homepage && (
                <a
                    href={homepage}
                    target='_blank'
                    title='작가의 Homepage 페이지 이동'
                    rel='noreferrer'>
                    Homepage
                </a>
            )}
        </div>
    )
}
