export const getWeekPad = (week: number) => {
    return week ? String(week).padStart(3, '0') : 0
}

export const 에디터특수기호변경 = (str: string) => {
    return str
        .replace(/&nbsp;/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
}
