import API from 'api'
import { S } from 'components/FigkPlayer/index.styled'
import { getFigkCookie, setFigkCookie } from 'function/home'
import useTMutation from 'hook/useMutation'
import { ComponentPropsWithRef, useRef, useState } from 'react'
import PlayerThumbnail from './Thumbnail'

interface FigkPlayerTyps extends ComponentPropsWithRef<'video'> {
    /**썸네일 주소 */
    jacketUrl: string
    /**썸네일 alt */
    jacketAlt?: string
    artFigkId: number
    videoUrl: string
}

const FigkPlayer = ({ jacketUrl, jacketAlt, artFigkId, videoUrl, ...rest }: FigkPlayerTyps) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    // const videoRef = useRef<ReactPlayer>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [videoState, setVideoState] = useState({
        firstPlaying: false, //최초 실행
        playing: false,
        muted: false,
    })
    const { firstPlaying } = videoState

    const onSuccessIncreaseView = () => {
        setFigkCookie({ target: 'art', type: 'view', id: artFigkId })
    }

    const { mutate: increaseView } = useTMutation(
        ['@increaseArtFigkView', String(artFigkId)],
        (id: number) => API.artFiGk.increaseArtFigkView(id),
        onSuccessIncreaseView
    )

    const playPauseHandler = () => {
        if (!getFigkCookie({ id: artFigkId, target: 'art', type: 'view' })) increaseView(artFigkId)
        if (videoRef.current) {
            videoRef.current.play()
        }
        setVideoState({
            ...videoState,
            // playing: !videoState.playing,
            firstPlaying: true,
        })
        console.log(videoState.firstPlaying)
    }

    return (
        <S.Container>
            {!firstPlaying && (
                <PlayerThumbnail
                    jacketUrl={jacketUrl}
                    jacketAlt={jacketAlt}
                    playPauseHandler={playPauseHandler}
                />
            )}
            <div
                ref={wrapperRef}
                className='video-fullscreen_Wrapper'>
                <video
                    ref={videoRef}
                    width='100%'
                    height='100%'
                    muted={videoState.muted}
                    controls
                    playsInline
                    preload='yes'
                    controlsList='nodownload'
                    //재생 끝나면 포스터 다시 띄움
                    onEnded={() => setVideoState((prev) => ({ ...prev, firstPlaying: false }))}
                    title='FIGK 비디오 플레이어'>
                    <source
                        src={videoUrl}
                        type='video/mp4'></source>
                </video>
            </div>
        </S.Container>
    )
}

export default FigkPlayer
