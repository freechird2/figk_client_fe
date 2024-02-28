import useWidth from 'hook/useWidth'
import WriterTitle from 'layout/WriterTitle'
import { AuthorModel } from 'model/writer'
import { breakpoints } from 'theme/mediaQuery'

interface Props {
    data: AuthorModel
    height: string
}

const WriterInfo = ({ data, height }: Props) => {
    const { width } = useWidth()

    return (
        <>
            <div className='back'>
                {width > breakpoints.tabletH && (
                    <WriterTitle
                        author={data}
                        height={height}
                    />
                )}
            </div>
            <div className='hole'>
                {width <= breakpoints.tabletH && (
                    <WriterTitle
                        author={data}
                        height='initial'
                    />
                )}
            </div>
        </>
    )
}

export default WriterInfo
