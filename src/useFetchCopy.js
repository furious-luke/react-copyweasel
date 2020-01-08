import {useState, useEffect} from 'react'
import {useLocalStorage} from 'tidbits/hooks/local-storage'
import {isNullish} from 'tidbits/utils/primitives'

import api from 'cw/api'

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
