import { ItoastState, toastState } from 'Recoil/Atom/toast'
import Icon from 'components/Icon'
import { AnimatePresence, Variants } from 'framer-motion'
import useWidth from 'hook/useWidth'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { S } from './index.styled'
const variant: Variants = {
    initial: { height: 0 },
    mobileInitial: { height: 0 },
    animate: {
        height: 40,
        transition: {
            ease: 'linear',
            duration: 0.3,
        },
    },
    mobileAnimate: {
        height: 60,
        transition: {
            ease: 'linear',
            duration: 0.3,
        },
    },
    exit: {
        height: 0,
        transition: {
            ease: 'linear',
            duration: 0.3,
        },
    },
}

const messageVariant: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            ease: 'easeIn',
            duration: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.1,
        },
    },
}
const GlobalToast = () => {
    const { media } = useWidth()
    const [showToast, setShowToast] = useRecoilState<ItoastState>(toastState)
    const [showMessage, setShowMessage] = useState<boolean>(false)

    useEffect(() => {
        if (showToast) {
            setShowMessage(true)
        }
        const Show = setTimeout(() => {
            setShowToast((prev) => ({ ...prev, render: false }))
            setShowMessage(false)
        }, 3000)
        return () => clearTimeout(Show)
    }, [setShowToast, showToast])

    return (
        <AnimatePresence>
            {showToast.render && (
                <S.Container
                    variants={variant}
                    initial={media.tabletH ? 'mobileInitial' : 'initial'}
                    animate={media.tabletH ? 'mobileAnimate' : 'animate'}
                    exit='exit'>
                    {showMessage && (
                        <S.ToastMessageBox
                            variants={messageVariant}
                            initial='initial'
                            animate='animate'
                            exit='exit'>
                            <span>{showToast.text}</span>
                            {/* <span>공유 링크가 복사되었습니다.</span> */}
                            <Icon icon={'circle_checked'} />
                        </S.ToastMessageBox>
                    )}
                </S.Container>
            )}
        </AnimatePresence>
    )
}

export default GlobalToast
