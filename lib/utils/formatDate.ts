/**
 *  Formats a date string to a human readable format
 * @param dateString - The date string to format
 * @returns The formatted date
 */
export function formatDate(dateString: string) {
  let parts = dateString.split('-')
  let hasDay = parts.length > 2

  return new Date(`${dateString}Z`).toLocaleDateString('en-US', {
    day: hasDay ? 'numeric' : undefined,
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
