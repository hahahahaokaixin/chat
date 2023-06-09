import moment from 'moment'

export function getCurrentDate() {
  const now = moment()
  const formattedDate = now.format('YYYY-MM-DD HH:mm:ss')
  return formattedDate
}

export function displayLocaleDate(ts: string) {
  // const timestampFromDb = "2023-04-16 11:10:48.000"; // assume this is the value retrieved from the database
  const dateObj = new Date(ts)

  const dateString = `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`

  return dateString
}
