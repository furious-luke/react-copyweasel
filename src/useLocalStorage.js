import {useState} from 'react'
import {parse, stringify} from 'flatted/esm'

export function useLocalStorage(key, options = {}) {
  function getStoredValue() {
    const storedValue = !options.disabled ? localStorage.getItem(key) : null
    if (storedValue === null) {
      return options.initialValue
    } else {
      try {
        return parse(storedValue)
      } catch (e) {
        console.error(e)
        localStorage.removeItem(key)
        return initialValue
      }
    }
  }
  // TODO: I'd rather not have to use extra state here, but figuring
  // out if this is the first render is balls.
  const [localValue, _setLocalValue] = useState(getStoredValue())
  function setLocalValue(newLocalValue) {
    if (!options.disabled) {
      localStorage.setItem(key, stringify(newLocalValue))
    }
    _setLocalValue(newLocalValue)
  }
  function clearLocalValue() {
    localStorage.removeItem(key)
  }
  return [localValue, setLocalValue, clearLocalValue]
}
