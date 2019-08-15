function formatDuration(amount) {
    if (amount == 0) { return "now" }
    let formatted = ""
    let array = []
    let years = getDuration("year", amount, 60 * 60 * 24 * 365)
    let days = getDuration("day", years.partial, 60 * 60 * 24)
    let hours = getDuration("hour", days.partial, 60 * 60)
    let minutes = getDuration("minute", hours.partial, 60)
    let seconds = getDuration("second", minutes.partial, 1)
    if (years.whole > 0) { array.push(years) }
    if (days.whole > 0) { array.push(days) }
    if (hours.whole > 0) { array.push(hours) }
    if (minutes.whole > 0) { array.push(minutes) }
    if (seconds.whole > 0) { array.push(seconds) }
    for (let i = array.length - 1; i >= 0; i--) {
        if (i == array.length - 2) { formatted = " and " + formatted }
        if (i < array.length - 2) { formatted = ", " + formatted }
        formatted = `${array[i].whole} ${array[i].name}` + formatted
    }
    return formatted
}
let getDuration = (name, input, amount) => {
    let duration = { name }
    duration.whole = Math.floor(input / amount)
    duration.partial = input % amount
    if (duration.whole != 1) { duration.name += "s" }
    return duration
}

// formatDuration(111133321)