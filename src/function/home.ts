import { FigkCookieModel } from 'model/common/cookie'
import { HomeLayoutItemModel, HomeListResponse } from 'model/home'
import { getWeekPad } from './common'
export const suffle = (array: Array<any>) => {
    for (let index = array.length - 1; index > 0; index--) {
        // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
        const randomPosition = Math.floor(Math.random() * (index + 1))

        // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
        const temporary = array[index]
        array[index] = array[randomPosition]
        array[randomPosition] = temporary
    }
    return array
}

export const HOME_LAYOUT_TYPE = {
    WEEK: 0,
    EMPTY: 1,
    TEXT: 2,
    ART: 3,
    MORE_FIKG: 4,
    TOP: 5,
    SINGLE_1: 6,
    SINGLE_2: 7,
    SINGLE_3: 8,
    DOUBLE_1: 9,
    DOUBLE_2: 10,
    MORE_ART: 11,
}

const getLayoutType = (type: number, len: number): Array<number> => {
    let layoutFormat: Array<number> = []
    if (type === 4) {
        layoutFormat = [
            // 1열
            HOME_LAYOUT_TYPE.WEEK,
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.EMPTY,
            HOME_LAYOUT_TYPE.TEXT,
            // 2열
            HOME_LAYOUT_TYPE.ART,
            HOME_LAYOUT_TYPE.MORE_ART,
            HOME_LAYOUT_TYPE.EMPTY,
            // 3열
            HOME_LAYOUT_TYPE.EMPTY,
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.EMPTY,
            HOME_LAYOUT_TYPE.TEXT,
            // 4열
            HOME_LAYOUT_TYPE.MORE_FIKG,
            HOME_LAYOUT_TYPE.EMPTY,
            HOME_LAYOUT_TYPE.DOUBLE_1,
            // 5열
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.EMPTY,
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.EMPTY,
            // 6열
            HOME_LAYOUT_TYPE.DOUBLE_2,
            HOME_LAYOUT_TYPE.MORE_FIKG,
            HOME_LAYOUT_TYPE.TEXT,
            // 7열
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.WEEK,
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.EMPTY,
            // 8열
            HOME_LAYOUT_TYPE.EMPTY,
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.EMPTY,
            HOME_LAYOUT_TYPE.SINGLE_1,
            // 9열
            HOME_LAYOUT_TYPE.SINGLE_2,
            HOME_LAYOUT_TYPE.EMPTY,
            HOME_LAYOUT_TYPE.MORE_FIKG,
            HOME_LAYOUT_TYPE.TEXT,
            // 10열
            HOME_LAYOUT_TYPE.WEEK,
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.EMPTY,
            HOME_LAYOUT_TYPE.TOP,
        ]
        if (len === 15)
            layoutFormat.push(
                // 11열
                HOME_LAYOUT_TYPE.TEXT,
                HOME_LAYOUT_TYPE.EMPTY,
                HOME_LAYOUT_TYPE.TEXT,
                HOME_LAYOUT_TYPE.SINGLE_3,
                // 12열
                HOME_LAYOUT_TYPE.EMPTY,
                HOME_LAYOUT_TYPE.TEXT,
                HOME_LAYOUT_TYPE.EMPTY,
                HOME_LAYOUT_TYPE.TOP
            )
    } else if (type === 3) {
        layoutFormat = [
            // col 1
            HOME_LAYOUT_TYPE.WEEK,
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.TEXT,
            // col 2
            HOME_LAYOUT_TYPE.ART,
            HOME_LAYOUT_TYPE.MORE_ART,
            // col 3
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.EMPTY,
            HOME_LAYOUT_TYPE.TEXT,
            // col 4
            HOME_LAYOUT_TYPE.MORE_FIKG,
            HOME_LAYOUT_TYPE.DOUBLE_1,
            // col 5
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.EMPTY,
            HOME_LAYOUT_TYPE.TEXT,
            // col 6
            HOME_LAYOUT_TYPE.DOUBLE_2,
            HOME_LAYOUT_TYPE.TEXT,
            // col 7
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.WEEK,
            HOME_LAYOUT_TYPE.TEXT,
            // col 8
            HOME_LAYOUT_TYPE.EMPTY,
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.SINGLE_1,
            // col 9
            HOME_LAYOUT_TYPE.SINGLE_2,
            HOME_LAYOUT_TYPE.MORE_FIKG,
            HOME_LAYOUT_TYPE.TEXT,
            // col 10
            HOME_LAYOUT_TYPE.WEEK,
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.TOP,
        ]

        if (len === 15)
            layoutFormat.push(
                // col 11
                HOME_LAYOUT_TYPE.TEXT,
                HOME_LAYOUT_TYPE.EMPTY,
                HOME_LAYOUT_TYPE.SINGLE_3,
                // col 12
                HOME_LAYOUT_TYPE.TEXT,
                HOME_LAYOUT_TYPE.TEXT,
                HOME_LAYOUT_TYPE.TOP
            )
    } else if (type === 2) {
        layoutFormat = [
            // col1
            HOME_LAYOUT_TYPE.WEEK,
            HOME_LAYOUT_TYPE.TEXT,
            // col2
            HOME_LAYOUT_TYPE.ART,
            // col3
            HOME_LAYOUT_TYPE.MORE_ART,
            HOME_LAYOUT_TYPE.TEXT,
            // col4
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.TEXT,
            // col 5
            HOME_LAYOUT_TYPE.DOUBLE_1,
            // col 6
            HOME_LAYOUT_TYPE.MORE_FIKG,
            HOME_LAYOUT_TYPE.TEXT,
            // col 7
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.TEXT,
            // col 8
            HOME_LAYOUT_TYPE.DOUBLE_2,
            // col 9
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.WEEK,
            // col 10
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.SINGLE_1,
            // col 11
            HOME_LAYOUT_TYPE.MORE_FIKG,
            HOME_LAYOUT_TYPE.TEXT,
            // col 12
            HOME_LAYOUT_TYPE.SINGLE_2,
            HOME_LAYOUT_TYPE.TEXT,
            // col 13
            HOME_LAYOUT_TYPE.TEXT,
            HOME_LAYOUT_TYPE.TOP,
        ]

        if (len === 15) {
            layoutFormat.push(
                // col 14
                HOME_LAYOUT_TYPE.EMPTY,
                HOME_LAYOUT_TYPE.SINGLE_3,
                // col 15
                HOME_LAYOUT_TYPE.TEXT,
                HOME_LAYOUT_TYPE.TEXT,
                // col 16
                HOME_LAYOUT_TYPE.TEXT,
                HOME_LAYOUT_TYPE.TOP
            )
        }
    } else if (type === 1) {
        layoutFormat = [
            HOME_LAYOUT_TYPE.TEXT, // col 1
            HOME_LAYOUT_TYPE.WEEK, // col 2
            HOME_LAYOUT_TYPE.TEXT, // col 3
            HOME_LAYOUT_TYPE.ART, // col 4
            HOME_LAYOUT_TYPE.MORE_ART, // col 5
            HOME_LAYOUT_TYPE.TEXT, // col 6
            HOME_LAYOUT_TYPE.TEXT, // col 7
            HOME_LAYOUT_TYPE.MORE_FIKG, // col 8
            HOME_LAYOUT_TYPE.TEXT, // col 9
            HOME_LAYOUT_TYPE.DOUBLE_1, // col 10
            HOME_LAYOUT_TYPE.TEXT, // col 11
            HOME_LAYOUT_TYPE.TEXT, // col 12
            HOME_LAYOUT_TYPE.DOUBLE_2, // col 13
            HOME_LAYOUT_TYPE.TEXT, // col 14
            HOME_LAYOUT_TYPE.TEXT, // col 15
            HOME_LAYOUT_TYPE.TEXT, // col 16
            HOME_LAYOUT_TYPE.MORE_FIKG, // col 17
            HOME_LAYOUT_TYPE.TEXT, // col 19
            HOME_LAYOUT_TYPE.SINGLE_1, // col 18
            HOME_LAYOUT_TYPE.TEXT, // col 20
            HOME_LAYOUT_TYPE.SINGLE_2, // col 21
        ]

        if (len === 15)
            layoutFormat.push(
                HOME_LAYOUT_TYPE.TEXT, // col 22
                HOME_LAYOUT_TYPE.TEXT, // col 23
                HOME_LAYOUT_TYPE.MORE_FIKG, // col 24
                HOME_LAYOUT_TYPE.SINGLE_3, // col 25
                HOME_LAYOUT_TYPE.TEXT // col 26
            )
        layoutFormat.push(HOME_LAYOUT_TYPE.TOP) // col 27)
    }
    return layoutFormat
}

export const getHomeLayoutArray = (type: number, list: HomeListResponse | undefined): Array<HomeLayoutItemModel> => {
    if (!list || list.textFigk.length < 1) return []

    const arr: Array<HomeLayoutItemModel> = []
    const layout: Array<number> = getLayoutType(type, list.textFigk.length)

    if (layout && layout.length > 0) {
        let textfigkIdx = 0

        layout.map((l: number, idx: number) => {
            let item: HomeLayoutItemModel = { type: l }
            if (l === HOME_LAYOUT_TYPE.WEEK) {
                item.value = `FIGK Vol.${getWeekPad(list.textFigk[0].week)}`
            } else if (l === HOME_LAYOUT_TYPE.TEXT) {
                item.textFigk = list.textFigk[textfigkIdx++]
            } else if (l === HOME_LAYOUT_TYPE.EMPTY) {
                item.value = ''
            } else if (l === HOME_LAYOUT_TYPE.ART) {
                item.artFigk = list.artFigk[0]
            }
            arr.push(item)
        })
    }

    return arr
}

export const getLayoutTypeByWidth = (width: number): number => {
    return width >= 1920 ? 4 : width >= 1440 ? 3 : width >= 960 ? 2 : 1
}
export const setFigkCookie = ({ target, type, id }: FigkCookieModel) => {
    const name = `${target}_${type}`
    const data = localStorage.getItem(name)

    if (!data) {
        localStorage.setItem(name, String(id))
    } else {
        const arr: Array<string> = data.split(',')

        if (!arr.includes(String(id))) {
            arr.push(String(id))
            localStorage.setItem(name, arr.join(','))
        }
    }
}

export const getFigkCookie = ({ target, type, id }: FigkCookieModel): boolean => {
    const name = `${target}_${type}`
    const data = localStorage.getItem(name)

    if (!data) return false
    else {
        const arr: Array<string> = data.split(',')
        return arr.includes(String(id))
    }
}

export const getGridLineBoxType = (type: number): 'initial' | 'span 1' | 'span 2' => {
    return type === HOME_LAYOUT_TYPE.ART || type === HOME_LAYOUT_TYPE.DOUBLE_1 || type === HOME_LAYOUT_TYPE.DOUBLE_2
        ? 'span 2'
        : 'span 1'
}
