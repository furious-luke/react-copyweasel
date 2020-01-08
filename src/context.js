import React from 'react'

import {useFetchCopy} from './useFetchCopy'

export const CopyContext = React.createContext()

export function CopyProvider({children}) {
  const value = useFetchCopy()
  return (
    <CopyContext.Provider value={value}>
      {children}
    </CopyContext.Provider>
  )
}
