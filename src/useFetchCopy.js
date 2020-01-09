import {useState, useEffect} from 'react'

import {useLocalStorage} from './useLocalStorage'
import {isNullish} from './utils'

import api from './api'

export function useFetchCopy() {
  const [data, setData] = useLocalStorage('copyweasel.table', {disabled: true})
  const [loading, setLoading] = useState(isNullish(data))
  useEffect(() => {
    async function load() {
      try {
        const response = await api.Query({
          copyTable: {
            table: true
          }
        })
        setData(JSON.parse(response.copyTable.table))
      } catch (e) {
        // TODO: What else to do here?
        console.error(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])
  return [data, loading]
}
