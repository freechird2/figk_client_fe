import { ReactComponent as Eye } from 'assets/graphic/dawn.svg'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    width: 100%;
    height: 100%;
    background-color: #000;
`
const Rotation = styled.div<{ reverse?: boolean }>`
    transform-origin: center;
    animation: rotation 2s infinite linear ${(p) => (p.reverse ? 'reverse' : '')};
    width: 18px;
    height: 18px;
    @keyframes rotation {
        to {
            transform: rotate(360deg);
        }
    }
`

export const Face = () => {
    return (
        <Container>
            <Rotation>
                <Eye />
            </Rotation>
            <Rotation reverse>
                <Eye />
            </Rotation>
            <Rotation>
                <Eye />
            </Rotation>
        </Container>
    )
}
