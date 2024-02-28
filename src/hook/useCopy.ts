import { nonAccessCopy } from 'constant/common'
import { useState } from 'react'

type onCopyFn = (text: string) => Promise<void>

function useCopy(): [boolean, onCopyFn] {
    const [isCopy, setIsCopy] = useState<boolean>(false)

    const onCopy: onCopyFn = async (text: string, msg?: string) => {
        document.removeEventListener('copy', nonAccessCopy)
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.top = '0'
        textarea.style.left = '0'
        textarea.style.position = 'fixed'

        document.body.appendChild(textarea)
        // focus() -> 사파리 브라우저 서포팅
        textarea.focus()
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)

        document.addEventListener('copy', nonAccessCopy)
    }

    return [isCopy, onCopy]
}

export default useCopy
