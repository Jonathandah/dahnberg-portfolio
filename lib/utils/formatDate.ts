/**
 *  Formats a date string to a human readable format
 * @param dateString - The date string to format
 * @returns The formatted date
 */
export function formatDate(date: Date, withTime = false): string {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  let month = months[date.getMonth()]
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let timezoneOffset = date.getTimezoneOffset() / 60 // Get timezone offset in hours
  let timezoneString = ''

  // Adjust timezone display for Central European Time (CET) or Central European Summer Time (CEST)
  if (timezoneOffset === -1 || timezoneOffset === -2) {
    timezoneString = 'CET'
  } else if (timezoneOffset === 0 || timezoneOffset === -3) {
    timezoneString = 'CEST'
  } else {
    timezoneString = `GMT${timezoneOffset}`
  }

  return `${month} ${day.toString().padStart(2, '0')}, ${date.getFullYear()} ${withTime ? `• ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${timezoneString}` : ''}`
}
