import API from 'api'
import { StyledHeart } from 'components/Icon/Heart/index.styled'
import { getFigkCookie, setFigkCookie } from 'function/home'
import useTMutation from 'hook/useMutation'
import useWidth from 'hook/useWidth'
import { ComponentPropsWithRef, useEffect, useState } from 'react'
import { DefaultTheme, StyledComponent } from 'styled-components'
import theme from 'theme'

interface Props extends ComponentPropsWithRef<StyledComponent<'svg', DefaultTheme, {}, never>> {
    id: number
}

const IconHeart = ({ id, ...rest }: Props) => {
    const { media } = useWidth()
    const [like, setLike] = useState<boolean>(false)
    const onSuccessIncreaseLike = () => {
        setFigkCookie({ target: 'text', type: 'like', id })
        setLike(true)
    }
    const { mutate } = useTMutation(['@increaseTextFigkLike', String(id)], (id: number) => API.Figk.increaseTextFigkLike(id), onSuccessIncreaseLike)

    const likeHandler = () => {
        if (!like) mutate(id)
    }

    useEffect(() => {
        setLike(getFigkCookie({ target: 'text', type: 'like', id }))
    }, [id])
    return (
        <StyledHeart
            width={'22'}
            height={'22'}
            viewBox={'0 0 22 22'}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={likeHandler}
            {...rest}>
            <path
                d={
                    'M16.9056 6.27704C16.1658 5.45352 15.1394 5 14.0156 5C12.4351 5 11.4345 5.92601 10.8734 6.70286C10.7278 6.90444 10.604 7.10657 10.5 7.29677C10.396 7.10657 10.2722 6.90444 10.1266 6.70286C9.56552 5.92601 8.56488 5 6.98438 5C5.86061 5 4.83425 5.45355 4.09438 6.27707C3.38868 7.06266 3 8.11478 3 9.23961C3 10.464 3.48729 11.6029 4.53355 12.8235C5.46861 13.9145 6.81384 15.039 8.37158 16.3412C8.95204 16.8265 9.5523 17.3283 10.1914 17.8768L10.2105 17.8933C10.2934 17.9644 10.3967 18 10.5 18C10.6033 18 10.7066 17.9644 10.7895 17.8933L10.8086 17.8768C11.4477 17.3283 12.048 16.8265 12.6285 16.3412C14.1862 15.0391 15.5314 13.9145 16.4665 12.8235C17.5127 11.6028 18 10.464 18 9.23961C18 8.11478 17.6113 7.06266 16.9056 6.27704Z'
                }
                stroke={like ? theme.palette.point1 : theme.palette.gray90}
                fill={like ? theme.palette.point1 : '#Fff'}
            />
        </StyledHeart>
    )
}

export default IconHeart
