import API from 'api'
import sample from 'assets/img/player_cover_sample.png'
import PlayerThumbnail from 'components/FigkPlayer/Thumbnail'
import { S as FIgkPlayerStyle } from 'components/FigkPlayer/index.styled'
import GridLineBox from 'components/GridLineBox'
import { AWS_BUCKET_URL } from 'constant/common'
import { getFigkCookie, setFigkCookie } from 'function/home'
import useTMutation from 'hook/useMutation'
import { Grid } from 'layout/Grid'
import PlayerBundle from 'layout/PlayerBundle'
import { ArtFigkModel } from 'model/home'
import { MotionVariants } from 'pages/ArtFigk/motion'
import { useRef, useState } from 'react'
interface Props {
    list: ArtFigkModel[]
}

const VideoBlock = ({ list }: Props) => {
    const videoRef = useRef<HTMLVideoElement>(document.createElement('video'))
    const [playSingleCount, setPlaySingleCount] = useState<number>(1)

    const [videoState, setVideoState] = useState({
        firstPlaying: false, //최초 실행
        muted: false,
        playerIndex: 0,
    })

    const { firstPlaying, muted, playerIndex } = videoState

    const onSuccessIncreaseView = () => {
        setFigkCookie({ target: 'art', type: 'view', id: list[playerIndex].id })
    }
    const { mutate: increaseView } = useTMutation(
        ['@increaseArtFigkView', String(list[playerIndex].id)],
        (id: number) => API.artFiGk.increaseArtFigkView(id),
        onSuccessIncreaseView
    )

    const playPauseHandler = (idx: number) => {
        if (!getFigkCookie({ id: list[playerIndex].id, target: 'art', type: 'view' })) increaseView(list[playerIndex].id)
        setVideoState({
            ...videoState,
            // playing: !videoState.playing,
            playerIndex: idx,
        })
        setTimeout(() => {
            videoRef.current.play()
        }, 300)
    }

    return (
        <Grid.ArtFigk.Container
            variants={MotionVariants.Container}
            initial='start'
            animate='end'>
            {list.map((item, index) => {
                return (
                    <GridLineBox
                        linecolor='line2'
                        column='initial'
                        key={item.id}>
                        <PlayerBundle
                            index={index}
                            data={item}>
                            <FIgkPlayerStyle.Container>
                                {playerIndex !== index + 1 && (
                                    <PlayerThumbnail
                                        jacketUrl={item.jacketUrl ? AWS_BUCKET_URL + item.jacketUrl : sample}
                                        jacketAlt={item.title}
                                        playPauseHandler={() => {
                                            playPauseHandler(index + 1)
                                        }}
                                    />
                                )}
                                <div className='video-fullscreen_Wrapper'>
                                    {playerIndex === index + 1 && (
                                        <video
                                            ref={videoRef}
                                            width='100%'
                                            height='100%'
                                            muted={muted}
                                            controls
                                            playsInline
                                            preload='yes'
                                            controlsList='nodownload'
                                            onPlay={() => setVideoState((prev) => ({ ...prev, firstPlaying: false }))}
                                            //재생 끝나면 포스터 다시 띄움
                                            onEnded={() => setVideoState((prev) => ({ ...prev, firstPlaying: false }))}
                                            title='FIGK 비디오 플레이어'>
                                            <source
                                                src={AWS_BUCKET_URL + item.videoUrl}
                                                type='video/mp4'></source>
                                        </video>
                                    )}
                                </div>
                            </FIgkPlayerStyle.Container>
                        </PlayerBundle>
                    </GridLineBox>
                )
            })}
        </Grid.ArtFigk.Container>
    )
}

export default VideoBlock
