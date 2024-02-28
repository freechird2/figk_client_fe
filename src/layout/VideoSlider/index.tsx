import sample from 'assets/img/player_cover_sample.png'
import PlayerThumbnail from 'components/FigkPlayer/Thumbnail'
import { S as FIgkPlayerStyle } from 'components/FigkPlayer/index.styled'
import { AWS_BUCKET_URL } from 'constant/common'
import { Variants } from 'framer-motion'
import useCursor from 'hook/useCursor'
import PlayerBundle from 'layout/PlayerBundle'
import { S } from 'layout/VideoSlider/index.styled'
import { ArtFigkModel } from 'model/home'
import { useEffect, useRef, useState } from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
// Import Swiper React components
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import API from 'api'
import { getFigkCookie, setFigkCookie } from 'function/home'
import useTMutation from 'hook/useMutation'
import 'swiper/css'
import 'swiper/css/navigation'
interface Props {
    list: ArtFigkModel[]
}
const VideoSlider = ({ list }: Props) => {
    const [swiper, setSwiper] = useState<SwiperCore>()
    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)

    const { enter, leave } = useCursor()
    const initialIndex = 0 //초기 인덱스
    const [artFigkId, setArtFigkId] = useState<number>(-1)
    const prevHandler = () => {
        swiper?.slidePrev()
    }
    const nextHandler = () => {
        swiper?.slideNext()
    }
    // const { isLoading, data: list } = useGetQuery(
    //     ['@getArtFigkList'],
    //     () => API.artFiGk.getArtFigkSlide(artFigkId),
    //     returnArtFigkSlideOption
    // )

    const variants: Variants = {
        start: {
            opacity: 0,
        },
        end: {
            opacity: 1,
            transition: {
                opacity: {
                    ease: 'ease',
                    duration: 1,
                    type: 'spring',
                },
            },
        },
    }

    const videoRef = useRef<HTMLVideoElement>(document.createElement('video'))

    const [videoState, setVideoState] = useState({
        firstPlaying: false, //최초 실행
        muted: false,
        playerIndex: -1,
    })

    const { firstPlaying, muted, playerIndex } = videoState

    const onSuccessIncreaseView = () => {
        setFigkCookie({ target: 'art', type: 'view', id: list[playerIndex].id })
    }
    const { mutate: increaseView } = useTMutation(
        ['@increaseArtFigkView', 'view'],
        (id: number) => API.artFiGk.increaseArtFigkView(id),
        onSuccessIncreaseView
    )

    const playPauseHandler = (idx: number) => {
        setVideoState({
            ...videoState,
            // playing: !videoState.playing,
            playerIndex: idx,
        })
        setTimeout(() => {
            videoRef.current.play()
        }, 300)
    }

    useEffect(() => {
        if (playerIndex < 0) return
        if (!getFigkCookie({ id: list[playerIndex].id, target: 'art', type: 'view' }))
            increaseView(list[playerIndex].id)
    }, [playerIndex])

    return (
        <>
            {/* ************ swiper ************ */}
            <S.Container
                variants={variants}
                initial='start'
                animate='end'>
                <Swiper
                    slidesPerView={1.7}
                    centeredSlides
                    loop
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        // 초기 설정
                        if (prevRef.current && nextRef.current) {
                            swiper.navigation.prevEl = prevRef.current
                            swiper.navigation.nextEl = nextRef.current
                        }
                        swiper.navigation.update()
                    }}
                    modules={[Navigation]}
                    onSwiper={(swiper) => setSwiper(swiper)}>
                    {list &&
                        list.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <S.StyledSlider className='slider_wrapper'>
                                        <PlayerBundle
                                            key={item.id}
                                            data={item}>
                                            <FIgkPlayerStyle.Container>
                                                {playerIndex !== index && (
                                                    <PlayerThumbnail
                                                        jacketUrl={
                                                            item.jacketUrl ? AWS_BUCKET_URL + item.jacketUrl : sample
                                                        }
                                                        jacketAlt={item.title}
                                                        playPauseHandler={() => {
                                                            playPauseHandler(index)
                                                        }}
                                                    />
                                                )}
                                                <div className='video-fullscreen_Wrapper'>
                                                    {playerIndex === index && (
                                                        <video
                                                            ref={videoRef}
                                                            width='100%'
                                                            height='100%'
                                                            muted={muted}
                                                            controls
                                                            playsInline
                                                            preload='yes'
                                                            controlsList='nodownload'
                                                            onPlay={() =>
                                                                setVideoState((prev) => ({
                                                                    ...prev,
                                                                    firstPlaying: false,
                                                                }))
                                                            }
                                                            //재생 끝나면 포스터 다시 띄움
                                                            onEnded={() =>
                                                                setVideoState((prev) => ({
                                                                    ...prev,
                                                                    firstPlaying: false,
                                                                }))
                                                            }
                                                            title='FIGK 비디오 플레이어'>
                                                            <source
                                                                src={AWS_BUCKET_URL + item.videoUrl}
                                                                type='video/mp4'></source>
                                                        </video>
                                                    )}
                                                </div>
                                            </FIgkPlayerStyle.Container>
                                        </PlayerBundle>
                                    </S.StyledSlider>
                                </SwiperSlide>
                            )
                        })}
                </Swiper>
            </S.Container>
            <S.NavArea
                className='prev'
                onClick={prevHandler}
                onMouseEnter={() => enter('prev')}
                onMouseLeave={leave}
            />
            <S.NavArea
                className='next'
                onClick={nextHandler}
                onMouseEnter={() => enter('next')}
                onMouseLeave={leave}
            />

            {/* <S.Container
                variants={variants}
                initial='start'
                animate='end'>
                <S.StyledSlider
                    ref={sliderRef}
                    className='slider_wrapper'
                    centerMode
                    infinite
                    centerPadding='20%'
                    slidesToShow={1} // 하나씩 보여주기
                    speed={500}
                    draggable={false}
                    initialSlide={0} // 초기 인덱스
                    beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)} // 슬라이드 인덱스를 이용해
                    prevArrow={
                        <>
                            <S.NavArea
                                className='prev'
                                onClick={prevHandler}
                                onMouseEnter={() => enter('prev')}
                                onMouseLeave={leave}
                            />
                        </>
                    }
                    nextArrow={
                        <>
                            <S.NavArea
                                className='next'
                                onClick={nextHandler}
                                onMouseEnter={() => enter('next')}
                                onMouseLeave={leave}
                            />
                        </>
                    }>
                    {list &&
                        list.map((item, index) => {
                            return (
                                <PlayerBundle
                                    key={item.id}
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
                            )
                        })}
                </S.StyledSlider>
            </S.Container> */}
        </>
    )
}

export default VideoSlider
