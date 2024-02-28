import styled from 'styled-components'
const Container = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    .video-fullscreen_Wrapper {
        video {
            display: block;
            width: 100%;
            height: 100%;
            aspect-ratio: 16/9;
            object-fit: cover;
        }
    }
`

export const S = {
    Container,
}
