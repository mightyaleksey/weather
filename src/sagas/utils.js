export function getCurrentTime () {
  const date = new Date()
  return [date.getHours(), date.getMinutes()]
}

export function getTimeValueByTime (time) {
  const value = time[0] + time[1] / 60
  return Math.abs(12 - value) / 12
}

export function getWeatherValueByCondition (condition) {
  if (condition === 'overcast') return 0.6
  if (condition.includes('cloudy')) return 0.3
  if (condition.includes('wind')) return 0.4
  return 0
}
