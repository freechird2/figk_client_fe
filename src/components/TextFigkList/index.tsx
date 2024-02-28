import { SolidHoop } from 'components/Graphic/SolidHoop'
import GridLineBox from 'components/GridLineBox'
import TextFigkCard from 'components/TextFigkCard'
import { S } from 'components/TextFigkCard/index.styled'
import { Grid } from 'layout/Grid/index'
import { FigkListModel } from 'model/figk'
import { TextFigkModel } from 'model/home'
import { MotionVariants } from 'pages/ArtFigk/motion'
import { InfiniteData } from 'react-query'

interface Props {
    list: InfiniteData<FigkListModel>
}

const TextFigkList = ({ list }: Props) => {
    return (
        // staggerChildren 딜레이가 적용되려면 컨테이너부터 렌더링 되어야함
        <Grid.Common.Container
            variants={MotionVariants.Container}
            initial='start'
            animate='end'>
            {list.pages.map((page: FigkListModel, idx: number) => {
                const renderArr = []

                renderArr.push(
                    <GridLineBox
                        key={`${renderArr.length}_${Date.now()}}`}
                        column='span 1'>
                        <S.Cover>Vol.{String(page.list[0].week).padStart(3, '0')}</S.Cover>
                    </GridLineBox>
                )

                renderArr.push(
                    ...page.list.map((figk: TextFigkModel, i: number) => {
                        return (
                            <GridLineBox
                                key={`${figk.id}`}
                                column='span 1'>
                                <TextFigkCard
                                    data={figk}
                                    variants={MotionVariants.list}
                                />
                            </GridLineBox>
                        )
                    })
                )

                renderArr.push(
                    <GridLineBox
                        key={`${renderArr.length}_${Date.now()}}`}
                        column='span 1'>
                        <S.End>
                            <SolidHoop />
                        </S.End>
                    </GridLineBox>
                )

                return renderArr
            })}
        </Grid.Common.Container>
    )
}

export default TextFigkList
