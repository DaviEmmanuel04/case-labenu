export const formatDate = (date) => {
    let result = new Date(date)
    result = new Intl.DateTimeFormat('pr-BR', {day: 'numeric', month: 'short', year: 'numeric'}).format(result)
    result = result.replace('.', '')
    result = result.split(' ')
    return `${result[0]} ${result[2]} ${result[4]}`
}