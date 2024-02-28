import Icon from 'components/Icon'
import IconDelete from 'components/Icon/Delete'
import { IconHamburger } from 'components/Icon/Hamburger/index.styled'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from 'hook/useOutsideClick'
import { HeaderSearch } from 'layout/GlobalHeader/Search'
import { useEffect, useRef, useState } from 'react'
import { ContentEditableEvent } from 'react-contenteditable'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
import theme from 'theme'
import { S } from './index.styled'
import { Slide } from './variant'

const SEARCH_MAX_LENGTH = 12
const GlobalMobileHeader = () => {
    const navigate = useNavigate()
    const searchRef = useRef<HTMLSpanElement>(document.createElement('span'))
    const [searchValue, setSearchValue] = useState<string | undefined>(() => localStorage.getItem('searchKeyword') ?? '')
    const [toggle, setToggle] = useState(() => localStorage.getItem('headerState') ?? 'default')

    const onChangeValue = (e: ContentEditableEvent) => {
        setSearchValue(e.currentTarget.innerText)
    }
    const headerStateHandler = (value: string) => {
        localStorage.setItem('headerState', value)
        setToggle(value)
    }
    const menuBoxRef = useOutsideClick(() => headerStateHandler('default'))

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
        if (e.key === 'Enter' || e.key === '13') {
            if (!searchValue || searchValue.length < 2) {
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
        if (SEARCH && searchRef.current) {
            searchRef.current.focus()
        }
    }, [SEARCH, searchValue])

    return (
        <S.HeaderContainerWrapper ref={menuBoxRef}>
            <S.HeaderContainerWrap>
                <S.HeaderContainer isMenu={MENU}>
                    <IconHamburger
                        className={toggle}
                        onClick={hamburgerHandler}
                    />
                    <div className='center'>
                        {(DEFAULT || MENU) && (
                            <Link
                                className='logo'
                                to={ROUTER_PATH.HOME}
                            />
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
                                    {searchValue === '' && <HeaderSearch.Placeholder onClick={focusHandler}>검색어를 입력해주세요.</HeaderSearch.Placeholder>}
                                </HeaderSearch.SearchBox>
                                {searchValue && searchValue.length > 0 && <IconDelete onClick={initialSearchHandler} />}
                            </HeaderSearch.Container>
                        )}
                    </div>
                    <button className='searchIcon'>
                        <Icon
                            icon='search'
                            stroke={theme.palette.black20}
                            size={36}
                            onClick={searchHandler}
                        />
                    </button>
                </S.HeaderContainer>
                <AnimatePresence>
                    {MENU && (
                        <S.MobileMenuBox
                            variants={Slide.variant}
                            initial='initial'
                            animate='animate'
                            exit='exit'>
                            <motion.div
                                variants={Slide.contentsVariant}
                                initial='initial'
                                animate='animate'
                                exit='exit'>
                                <S.HeaderMenu
                                    as={Link}
                                    className='font_work'
                                    to={ROUTER_PATH.ABOUT}
                                    onClick={() => headerStateHandler('default')}>
                                    ABOUT
                                </S.HeaderMenu>
                                <S.HeaderMenu
                                    as={Link}
                                    className='font_work'
                                    to={ROUTER_PATH.TEXT_FIGK}
                                    onClick={() => headerStateHandler('default')}>
                                    FIGK
                                </S.HeaderMenu>
                                <S.HeaderMenu
                                    as={Link}
                                    className='font_work'
                                    to={ROUTER_PATH.ART_FIGK}
                                    onClick={() => headerStateHandler('default')}>
                                    ART FIGK
                                </S.HeaderMenu>
                            </motion.div>
                        </S.MobileMenuBox>
                    )}
                </AnimatePresence>
            </S.HeaderContainerWrap>
        </S.HeaderContainerWrapper>
    )
}
export default GlobalMobileHeader
