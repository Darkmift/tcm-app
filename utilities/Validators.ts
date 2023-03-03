
export function isValidNumber(value: unknown) {
  const testValue = typeof value === 'string' ? +value : value
  return typeof testValue === 'number' && !isNaN(testValue)
}
export function isNotEmptyString(testVarForValidText: unknown): boolean {
  return (
    typeof testVarForValidText === 'string' && testVarForValidText.length > 0
  )
}
