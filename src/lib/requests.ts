'use server'

import { logout } from '@/app/(auth)/actions'
import axios, { AxiosError } from 'axios'
import { cookies } from 'next/headers'
import { EndpointType } from './types'

const access = cookies().get('access')?.value
const baseUrl = 'https://api.rci.rest'
const endpoints: EndpointType = {
  // user
  users: `${baseUrl}/auth/users`,
}

axios.interceptors.request.use((config) => {
  if (access) {
    config.headers.Authorization = `Bearer ${access}`
  }

  return config
})

export async function getRequest(url: keyof EndpointType, params: unknown = {}) {
  return await axios
    .get(endpoints[url], { params })
    .then((response) => response.data)
    .catch((error) => {
      handleError(error)
      return error?.response?.data
    })
}

export async function postRequest(url: keyof EndpointType, values: unknown) {
  return await axios
    .post(endpoints[url], values)
    .then((response) => response.data)
    .catch((error) => error?.response?.data)
}

const handleError = (error: AxiosError) => {
  if (error?.response?.status === 401) {
    logout()
  }
}
