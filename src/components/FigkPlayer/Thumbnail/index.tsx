import sample from 'assets/img/player_cover_sample.png'
import { S } from './index.styled'
const SvgCircle = () => {
    return (
        <svg viewBox='0 0 200 200'>
            <circle
                cx='100'
                cy='100'
                r='70'
                fill='transparent'
            />
            <circle
                cx='100'
                cy='100'
                r='70'
                stroke='#fff'
                strokeWidth='0.8'
                strokeDasharray='1 10'
                strokeLinecap='square'
                fill='transparent'
            />
        </svg>
    )
}

interface IPlayerThumbnail {
    /**썸네일 주소 */
    jacketUrl: string
    /**썸네일 alt */
    jacketAlt?: string
    playPauseHandler: VoidFunction
}
const PlayerThumbnail = ({ jacketUrl, jacketAlt, playPauseHandler }: IPlayerThumbnail) => {
    return (
        <S.Thumbnail>
            <img
                src={jacketUrl ?? sample}
                alt={`${jacketAlt}의 썸네일`}
                loading='lazy'
            />
            <div className='dim'>
                <div
                    className='playButton'
                    role='button'
                    onClick={playPauseHandler}>
                    <div className='circle'>
                        <SvgCircle />
                    </div>
                    <div className='playText'>
                        PLAY NOW <span>PLAY NOW</span>
                    </div>
                </div>
            </div>
            <div className='mobilePlayButton'>
                <button
                    type='button'
                    onClick={playPauseHandler}
                />
            </div>
        </S.Thumbnail>
    )
}

export default PlayerThumbnail
