export const createDate = (date) => {
    let month = new Date(date).getMonth() + 1
    let day = new Date(date).getDay()
    const year = new Date(date).getFullYear()

    if (day < 10) day = `0${day}`
    if (month < 10) month = `0${month}`

    return `${day}/${month}/${year}`
}
