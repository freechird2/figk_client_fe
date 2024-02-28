import { atom } from 'recoil'
export interface ItoastState {
    text: string
    render: boolean
}
export const toastState = atom<ItoastState>({
    key: 'toastState',
    default: { text: '', render: false },
})
