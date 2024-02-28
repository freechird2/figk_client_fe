import Icon from 'components/Icon'
import IconDelete from 'components/Icon/Delete'
import { IconHamburger } from 'components/Icon/Hamburger/index.styled'
import useCursor from 'hook/useCursor'
import { S } from 'layout/GlobalHeader/index.styled'
import { useEffect, useRef, useState } from 'react'
import { ContentEditableEvent } from 'react-contenteditable'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
import theme from 'theme'
import { HeaderSearch } from './Search'
const SEARCH_MAX_LENGTH = 12
const GlobalHeader = () => {
    const { enter, leave } = useCursor()
    const navigate = useNavigate()
    const searchRef = useRef<HTMLSpanElement>(document.createElement('span'))
    const [searchValue, setSearchValue] = useState<string | undefined>(() => localStorage.getItem('searchKeyword') ?? '')
    const [toggle, setToggle] = useState(() => localStorage.getItem('headerState') ?? 'default')
    const [searchParam, setSearchParam] = useSearchParams()
    const word = searchParam.get('search')
    const onChangeValue = (e: ContentEditableEvent) => {
        setSearchValue(e.currentTarget.innerText)
    }
    const headerStateHandler = (value: string) => {
        localStorage.setItem('headerState', value)
        setToggle(value)
    }

    // 검색버튼 핸들러 : input이 포커스된다
    const focusHandler = () => {
        if (searchRef.current) {
            searchRef.current.focus()
        }
    }
    const searchHandler = () => {
        headerStateHandler('search')
        focusHandler()
    }

    // input 초기화 버튼 핸들러 : input이 포커스된다
    const initialSearchHandler = () => {
        setSearchValue('')
        localStorage.removeItem('searchKeyword')
        if (searchRef.current) searchRef.current.focus()
    }
    // 햄버거 상태값 조건들
    const DEFAULT = toggle === 'default'
    const MENU = toggle === 'menu'
    const SEARCH = toggle === 'search'

    const onValid = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchValue) {
            if (searchValue.length < 2) {
                alert('2글자 이상의 검색어를 입력해주세요.')
                return
            }
            localStorage.setItem('searchKeyword', searchValue)
            navigate(`${ROUTER_PATH.SEARCH}/${ROUTER_PATH.TEXT_FIGK}?search=${searchValue}`)
            headerStateHandler('search')
        }
    }

    const hamburgerHandler = () => {
        if (DEFAULT) {
            return headerStateHandler('menu')
        }
        return headerStateHandler('default')
    }

    useEffect(() => {
        headerStateHandler(toggle)
        if (SEARCH && searchRef.current) {
            searchRef.current.focus()
        }
    }, [SEARCH, toggle])

    useEffect(() => {
        if (word) {
            setSearchValue(word)
            localStorage.setItem('searchKeyword', word)
        }
    }, [word])

    return (
        <S.HeaderContainer>
            <IconHamburger
                className={toggle}
                onClick={hamburgerHandler}
                onMouseEnter={() => enter('action')}
                onMouseLeave={leave}
            />

            <div className='center'>
                {DEFAULT && (
                    <Link
                        className='logo'
                        to={ROUTER_PATH.HOME}
                        onMouseEnter={() => enter('action')}
                        onMouseLeave={leave}
                    />
                )}
                {MENU && (
                    <div className='menu'>
                        <S.HeaderMenu
                            onClick={() => headerStateHandler('default')}
                            as={Link}
                            className='font_work'
                            to={ROUTER_PATH.ABOUT}>
                            ABOUT <span>ABOUT</span>
                        </S.HeaderMenu>
                        <S.HeaderMenu
                            onClick={() => headerStateHandler('default')}
                            as={Link}
                            className='font_work'
                            to={ROUTER_PATH.TEXT_FIGK}>
                            FIGK <span>FIGK</span>
                        </S.HeaderMenu>
                        <S.HeaderMenu
                            onClick={() => headerStateHandler('default')}
                            as={Link}
                            className='font_work'
                            to={ROUTER_PATH.ART_FIGK}>
                            ART FIGK <span>ART FIGK</span>
                        </S.HeaderMenu>
                    </div>
                )}
                {SEARCH && (
                    <HeaderSearch.Container>
                        <HeaderSearch.SearchBox className={searchValue === '' ? 'placeholder' : ''}>
                            <HeaderSearch.Search
                                innerRef={searchRef}
                                tagName='span'
                                html={searchValue ? searchValue.substring(0, SEARCH_MAX_LENGTH) : ''}
                                spellCheck={false}
                                onChange={onChangeValue}
                                onKeyUp={onValid}
                            />
                            {searchValue === '' && (
                                <HeaderSearch.Placeholder onClick={focusHandler}>검색어를 입력해주세요.</HeaderSearch.Placeholder>
                            )}
                        </HeaderSearch.SearchBox>
                        {searchValue && searchValue.length > 0 && <IconDelete onClick={initialSearchHandler} />}
                    </HeaderSearch.Container>
                )}
            </div>
            <button
                className='searchIcon'
                onMouseEnter={() => enter('action')}
                onMouseLeave={leave}>
                <Icon
                    icon='search'
                    stroke={theme.palette.black20}
                    size={36}
                    onClick={searchHandler}
                />
            </button>
        </S.HeaderContainer>
    )
}

export default GlobalHeader
