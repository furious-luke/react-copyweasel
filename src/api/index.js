import { Chain } from './graphql-zeus'

const apiSettings = {
  headers: {
    'Content-Type': 'application/json'
  }
}
const api = new Proxy({}, {
  get(target, prop) {
    console.debug(`Calling API.${prop} with settings: `, apiSettings)
    return Chain('/graphql/', apiSettings)[prop]
  }
})

export function setBearer(token) {
  if (token) {
    console.debug('Set bearer token: ', token)
    apiSettings.headers['Authorization'] = `Bearer ${token}`
  } else {
    console.debug('Clearing bearer token')
    delete apiSettings.headers['Authorization']
  }
}

export default api
