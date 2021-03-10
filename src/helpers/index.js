export const createDate = (date) => {
    let month = new Date(date).getMonth() + 1
    let day = new Date(date).getDate()
    const year = new Date(date).getFullYear()

    if (day < 10) day = `0${day}`
    if (month < 10) month = `0${month}`

    return `${day}/${month}/${year}`
}

export const sortArray = (array, param, order) => {
    return array.sort((a, b) => {
        if (order) return a[param] < b[param] ? -1 : 1
        return a[param] < b[param] ? 1 : -1
    })
}

export const arrayStringFilter = (array, field, value, tag) => {
    console.log(field, value)
    if (value.length > 2) {
        return array.filter((item) => {
            return item[field].toLowerCase().search(value) !== -1
        })
    } else return array
}
export const arrayTagsFilter = (array, value) => {
    if (value.length > 2) {
        return array.filter((item) => {
            return (
                item.tags.filter((tag) => {
                    return tag.toLowerCase().search(value) !== -1
                }).length > 0
            )
        })
    } else return array
}
