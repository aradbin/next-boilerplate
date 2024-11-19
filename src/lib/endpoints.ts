'use server'

import { headers } from 'next/headers'
import { EndpointType } from './types'

const protocol = 'http://'
const baseUrl = 'api.rci.rest'
const endpoints: EndpointType = {
  // auth
  login: `${baseUrl}/auth/login`,
  profile: `${baseUrl}/auth/profile`,
  // user
  users: `${baseUrl}/auth/users`,
}

export async function getEndpoint(key: keyof EndpointType) {
  const { hasSubdomain, subdomain } = await getSubdomain()

  return `${protocol}${hasSubdomain ? `${subdomain}.` : ''}${endpoints[key]}`
}

export async function getSubdomain() {
  const hostname = headers().get('host') || ''
  const subdomain = hostname.split('.')[0]
  let hasSubdomain = false
  if (subdomain && !subdomain.includes('localhost') && !subdomain.includes('f1t-cloud') && !subdomain.includes('vercel')) {
    hasSubdomain = true
  }

  return {
    hasSubdomain,
    subdomain,
  }
}
