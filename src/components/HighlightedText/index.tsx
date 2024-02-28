interface Props {
    text: string
    query?: string | undefined
}

export const HighlightedText = ({ text, query }: Props) => {
    const parts = text ? text.split(new RegExp(`(${query})`, 'gi')) : []

    return (
        <>
            {text && query ? (
                <>
                    {parts.map((part, index) => {
                        return part.toLowerCase() === query.toLowerCase() ? <mark key={index}>{part}</mark> : part
                    })}
                </>
            ) : (
                <>{text}</>
            )}
        </>
    )
}
