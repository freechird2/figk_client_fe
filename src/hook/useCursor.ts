import { CursorState, CursorStateTypes } from 'Recoil/Atom/cursor'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

const useCursor = () => {
    const location = useLocation()
    const setCursorForm = useSetRecoilState<CursorStateTypes>(CursorState)
    const enter = (form: CursorStateTypes) => {
        setCursorForm(form)
    }
    const leave = () => {
        setCursorForm('default')
    }

    useEffect(() => {
        setCursorForm('default')
    }, [location])
    return { enter, leave }
}

export default useCursor
