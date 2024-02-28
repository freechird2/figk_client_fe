export type breakpointsTypes = {
    mobile: number
    tabletV: number
    tabletH: number
}

export const breakpoints: breakpointsTypes = {
    mobile: 480,
    tabletV: 768,
    tabletH: 1200,
}

//미디어쿼리
export const mediaQuery = (key: keyof typeof breakpoints) => {
    return `@media screen and (max-width: ${breakpoints[key]}px)`
    // return (style: TemplateStringsArray | String) =>
    //   `@media (width <= ${breakpoints[key]}px){${style}}`;
}
