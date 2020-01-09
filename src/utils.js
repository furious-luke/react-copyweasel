export function isFunction(value) {
  return value && {}.toString.call(value) === '[object Function]'
}

export function isNullish(value) {
  return value === undefined || value === null
}
