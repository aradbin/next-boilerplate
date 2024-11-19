'use server'

import { EndpointType } from './types'

const protocol = 'https://'
const baseUrl = 'api.rci.rest'
const endpoints: EndpointType = {
  // auth
  login: '/auth/login',
  profile: '/auth/profile',
  // user
  users: '/users',
}

export async function getEndpoint(key: keyof EndpointType) {
  return `${protocol}${baseUrl}${endpoints[key]}`
}
