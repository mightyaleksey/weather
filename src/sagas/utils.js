export function getCurrentTime () {
  const date = new Date()
  return [date.getHours(), date.getMinutes()]
}

export function getTimeValueByTime (time) {
  const value = time[0] + time[1] / 60
  return Math.abs(12 - value) / 12
}

export function getWeatherValueByCondition (weatherCode, time) {
  const currentTimeInUTC = new Date().toISOString().split(':')[0] + ':00'
  const indexForCode = time.indexOf(currentTimeInUTC)
  const code = weatherCode[indexForCode] ?? weatherCode[9]
  return 0.01 * code
}
