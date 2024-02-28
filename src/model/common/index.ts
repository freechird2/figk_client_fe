export interface GenericResponse {
    code: number
    message: string
    data: any | null
}

export type TagType = {
    id: string
    name: string
}

export type BooleanType = 'Y' | 'N'

export interface HashtagModel {
    id: number
    name: string
}

export interface PagenationModel {
    page?: number
    per?: number
}
