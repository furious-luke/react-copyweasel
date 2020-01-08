import {partial, map, sum, find, path, propEq, toPairs} from 'ramda'

export function lookupCopy(table, copyKey, context) {
  const entries = table[copyKey]
  if (!entries) {
    return undefined
  }
  return path(
    ['entry', 'text'],
    find(
      propEq('score', 1),
      entries.map(partial(scoreEntry, [context]))
    ) || {}
  )
}

function scoreEntry(context, entry) {
  const attributes = entry.attributes || {}
  const matched = sum(map(partial(matchAttribute, [context]), toPairs(attributes)))
  return {
    entry,
    score: Object.keys(attributes).length / (0 + matched)
  }
}

function matchAttribute(context, [key, value]) {
  return (context || {})[key] === value
}
