export const CHANGE_METRIC = 'CHANGE_METRIC'
export function changeMetric (name, value) {
  return { type: CHANGE_METRIC, payload: { name, value } }
}
