import { PropsWithChildren, useState } from 'react'
import { createContext } from 'vm'

interface IFigkPlayerContext {
    count: number
    countPlayIndex: (num: number) => void
    index: number
}

const FigkPlayerContext = createContext({
    count: 0,
    countPlayIndex: (num: number) => {},
    index: 0,
})
interface IFigkPlayerProvider extends PropsWithChildren {
    index: number
}
const FigkPlayerProvider = ({ index, children }: IFigkPlayerProvider) => {
    const [playIndex, setPlayIndex] = useState<number>(0)

    const countPlayIndex = () => {
        setPlayIndex(playIndex + 1)
    }
    return <FigkPlayerContext.Provider value={{ count: playIndex, index: index, countPlayIndex }}>{children}</FigkPlayerContext.Provider>
}

export { FigkPlayerContext, FigkPlayerProvider }
