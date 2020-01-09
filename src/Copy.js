import React, {useContext} from 'react'

import {CopyContext} from './context'
import {lookupCopy} from './lookupCopy'
import {isFunction} from './utils'

export function Copy({as = 'span', copyKey, context, children, ...props}) {
  const [data, loading] = useContext(CopyContext)
  if (loading) {
    return null
  }
  const copy = lookupCopy(data, copyKey, context)
  if (isFunction(children)) {
    return children(copy)
  }
  const Component = as
  return (
    <Component {...props}>{copy || children}</Component>
  )
}
