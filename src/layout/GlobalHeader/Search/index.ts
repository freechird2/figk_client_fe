import ContentEditable from 'react-contenteditable'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 10px;
    flex: 1;
`
const SearchBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: calc(100%);
`
const Search = styled(ContentEditable)`
    font-size: 1.5rem;
    background-color: ${(p) => p.theme.bgColor.bg1};
    outline: none;
    //커서가 보이는 최소 넓이
    min-width: 1px;
    white-space: nowrap;
    &::placeholder {
    }
    caret-color: #000;
`
const Placeholder = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-size: 1.5rem;
    white-space: nowrap;
    color: ${(p) => p.theme.textColor.textColor10};
`

export const HeaderSearch = {
    Container,
    SearchBox,
    Search,
    Placeholder,
}
