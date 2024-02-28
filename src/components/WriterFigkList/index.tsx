import GridLineBox from 'components/GridLineBox'
import TextFigkCard from 'components/TextFigkCard'
import Footer from 'layout/GlobalFooter'
import { Grid } from 'layout/Grid'
import { FigkListModel } from 'model/figk'
import { TextFigkModel } from 'model/home'
import { MotionVariants } from 'pages/ArtFigk/motion'
import { InfiniteData } from 'react-query'

interface Props {
    data: InfiniteData<FigkListModel>
    target: React.Dispatch<React.SetStateAction<HTMLDivElement | null | undefined>>
}

const WriterFigkList = ({ data, target }: Props) => {
    return (
        <div className='front'>
            <Grid.TextFigk.Container
                variants={MotionVariants.Container}
                initial='start'
                animate='end'>
                {data.pages.map((page: FigkListModel, idx: number) => {
                    return page.list.map((figk: TextFigkModel) => {
                        return (
                            <GridLineBox
                                key={figk.id}
                                column='span 1'>
                                <TextFigkCard
                                    data={figk}
                                    isWriter
                                />
                            </GridLineBox>
                        )
                    })
                })}
            </Grid.TextFigk.Container>
            <div
                style={{ transform: `translate3d(0,-300px,0)` }}
                ref={target}
            />
            <div className='footerCover'>
                <Footer />
            </div>
        </div>
    )
}

export default WriterFigkList
