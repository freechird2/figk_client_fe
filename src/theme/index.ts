import { DefaultTheme } from 'styled-components'

type PaletteType = {
    black10: string
    black20: string

    gray10: string
    gray20: string
    gray30: string
    gray40: string
    gray50: string
    gray60: string
    gray70: string
    gray80: string
    gray90: string

    light10: string
    light20: string
    light30: string
    light40: string
    light50: string

    point1: string
    point2: string

    error: string
}

type TextColorType = {
    /**palette.gray30 */
    textColor10: string
    /**palette.gray40 */
    textColor20: string
    /**palette.gray50 */
    textColor30: string
    /**palette.gray60 */
    textColor40: string
    /**palette.gray70 */
    textColor50: string
    /**palette.gray80 */
    textColor60: string
    /**palette.gray90 */
    textColor70: string
    /**palette.black10 */
    textColor80: string
    /**palette.black20 */
    textColor90: string
}

type LineColorType = {
    line1: string
    line2: string
    line3: string
    line4: string
}

type BgColorType = {
    bg1: string
    bg2: string
}

type DimType = {
    dim1: string
    dim2: string
    dim3: string
    dim4: string
    dim5: string
    dim6: string
}

type LayoutType = {
    headerHeight: string
    mobileHeaderHeight: string
    footerheight: string
    pageTitle: string
    tabltePageTitle: string
    mobilePageTitle: string
    pcSidePadding: string
    tabletSidePadding: string
    mobileSidePadding: string
}

const palette: PaletteType = {
    black10: '#222326',
    black20: '#0f0f0f',

    gray10: '#DDDEE1',
    gray20: '#D4D6D9',
    gray30: '#CED0D3',
    gray40: '#B9BCC1',
    gray50: '#9EA2A9',
    gray60: '#838990',
    gray70: '#6A6F77',
    gray80: '#52565C',
    gray90: '#393C40',

    light10: '#FAFAFA',
    light20: '#F5F5F5',
    light30: '#F2F2F2',
    light40: '#EFF0F1',
    light50: '#EDEDED',

    point1: '#FF4D00',
    point2: '#FF6522',

    error: '#FF3C3C',
}

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: PaletteType
        textColor: TextColorType
        lineColor: LineColorType
        bgColor: BgColorType
        layout: LayoutType
        dim: DimType
    }
}

const theme: DefaultTheme = {
    palette: {
        black10: palette.black10,
        black20: palette.black20,

        gray10: palette.gray10,
        gray20: palette.gray20,
        gray30: palette.gray30,
        gray40: palette.gray40,
        gray50: palette.gray50,
        gray60: palette.gray60,
        gray70: palette.gray70,
        gray80: palette.gray80,
        gray90: palette.gray90,

        light10: palette.light10,
        light20: palette.light20,
        light30: palette.light30,
        light40: palette.light40,
        light50: palette.light50,

        point1: palette.point1,
        point2: palette.point2,

        error: palette.error,
    },
    textColor: {
        textColor10: palette.gray30,
        textColor20: palette.gray40,
        textColor30: palette.gray50,
        textColor40: palette.gray60,
        textColor50: palette.gray70,
        textColor60: palette.gray80,
        textColor70: palette.gray90,
        textColor80: palette.black10,
        textColor90: palette.black20,
    },

    lineColor: {
        line1: palette.light10,
        line2: palette.light40,
        line3: palette.gray10,
        line4: palette.gray80,
    },

    bgColor: {
        bg1: palette.light10,
        bg2: palette.light20,
    },

    layout: {
        headerHeight: '56px',
        mobileHeaderHeight: '50px',
        footerheight: '60px',
        pageTitle: '189px',
        tabltePageTitle: '200px',
        mobilePageTitle: '130px',
        pcSidePadding: '50px',
        tabletSidePadding: '40px',
        mobileSidePadding: '30px',
    },
    dim: {
        dim1: 'rgba(0,0,0,0.1)',
        dim2: 'rgba(0,0,0,0.2)',
        dim3: 'rgba(0,0,0,0.3)',
        dim4: 'rgba(0,0,0,0.4)',
        dim5: 'rgba(0,0,0,0.5)',
        dim6: 'rgba(0,0,0,0.6)',
    },
}

export default theme
