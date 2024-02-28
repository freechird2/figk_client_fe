import { ItoastState, toastState } from 'Recoil/Atom/toast'
import API from 'api'
import { S } from 'components/FigkPlayer/FigkPlayerController/index.styled'
import Icon from 'components/Icon'
import PlayerSlide from 'components/PlayerSlide'
import { getFigkCookie, setFigkCookie } from 'function/home'
import useCopy from 'hook/useCopy'
import useTMutation from 'hook/useMutation'
import { useRef } from 'react'
// import CopyToClipboard from 'react-copy-to-clipboard'
import { useSetRecoilState } from 'recoil'

interface FigkPlayerControllerTypes {
    playing: boolean
    /** 재생 / 일시정지 토글 */
    onPlayPause: VoidFunction
    /** 되감기 */
    // onRewind: () => void
    /** 빨리감기 */
    // onFoward: () => void
    /** 진행도 비율*/
    played: number
    /** 진행바 컨트롤  */
    // onSeek: (value: string) => void
    // onSeekMouseUp: (value: number) => void
    volume: number
    onVolumeChangeHandler: (value: string) => void
    // onVolumeSeekUp: (value: string) => void
    muted: boolean
    onMute: VoidFunction
    // currentTime: string
    // duration: string
    artFigkId?: number
    fullScreenHandler: VoidFunction
}

const FigkPlayerController = ({
    playing,
    onPlayPause,
    played,
    // onSeek,
    // onSeekMouseUp,
    volume,
    onVolumeChangeHandler,
    // onVolumeSeekUp,
    muted,
    onMute,
    // currentTime,
    // duration,
    artFigkId,
    fullScreenHandler,
}: FigkPlayerControllerTypes) => {
    const [isCopy, onCopy] = useCopy()
    const videoControllerRef = useRef<HTMLDivElement>(document.createElement('div'))
    const HOVER_SIZE = 31
    const setShowToast = useSetRecoilState<ItoastState>(toastState)

    const onSuccessIncreaseShard = () => {
        if (artFigkId) setFigkCookie({ target: 'art', type: 'shared', id: artFigkId })
    }

    const { mutate: increaseShared } = useTMutation(
        ['@increaseArtFigkShared', String(artFigkId)],
        (id: number) => API.artFiGk.increaseArtFigkShare(id),
        onSuccessIncreaseShard
    )

    const onShared = () => {
        if (artFigkId && !getFigkCookie({ target: 'art', type: 'shared', id: artFigkId })) {
            increaseShared(artFigkId)
        }
        onCopy(`${document.location.origin}/shared/art?id=${artFigkId}`)
        setShowToast((prev) => ({ text: '공유 링크가 복사되었습니다.', render: true }))
    }
    return (
        <S.Container ref={videoControllerRef}>
            <S.Track>
                <PlayerSlide
                    value={played * 100}
                    progress={played * 100}
                    // onChange={(e) => onSeek(e.target.value)}
                    // onMouseUp={(e) => onSeekMouseUp(Number(e.currentTarget.value))}
                />
            </S.Track>
            <div className='controllBox'>
                <div className='left'>
                    <S.IconHoverBox width={HOVER_SIZE}>
                        <Icon
                            size={15}
                            icon={playing ? 'pause' : 'play'}
                            onClick={onPlayPause}
                        />
                    </S.IconHoverBox>

                    <S.Time>{/* {currentTime} / {duration} */}</S.Time>
                </div>
                <div className='right'>
                    <S.Sound>
                        <div className='slideBox'>
                            <PlayerSlide
                                value={volume * 100}
                                progress={volume * 100}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onVolumeChangeHandler(e.target.value)}
                                // onMouseUp={(e: React.MouseEvent<HTMLInputElement>) => onVolumeSeekUp(e.currentTarget.value)}
                            />
                        </div>

                        <Icon
                            size={15}
                            icon={muted ? 'muted' : 'sound'}
                            onClick={onMute}
                        />
                    </S.Sound>
                    {/* <button type="button" onClick={onRewind}>
            되감기
          </button>
          <button type="button" onClick={onFoward}>
            빨리감기
          </button> */}
                    <S.IconHoverBox width={HOVER_SIZE}>
                        <Icon
                            size={15}
                            icon='fullSize'
                            // onClick={screenHandler}
                            onClick={fullScreenHandler}
                        />
                    </S.IconHoverBox>
                    {/* <CopyToClipboard
                        text={`${document.location.origin}/shared/art?id=${artFigkId}`}
                        onCopy={onShared}> */}
                    <S.IconHoverBox
                        width={HOVER_SIZE}
                        onClick={onShared}>
                        <Icon
                            size={15}
                            icon='copy1'
                        />
                    </S.IconHoverBox>
                    {/* </CopyToClipboard> */}
                </div>
            </div>
        </S.Container>
    )
}

export default FigkPlayerController
