'use server'

import { logout } from '@/app/(auth)/actions'
import axios, { AxiosError } from 'axios'
import { cookies } from 'next/headers'
import { EndpointType } from './types'
import { getEndpoint } from './endpoints'

const access = cookies().get('access')?.value
axios.interceptors.request.use((config) => {
  if (access) {
    config.headers.Authorization = `Bearer ${access}`
  }

  return config
})

export async function getRequest(url: keyof EndpointType, params: unknown = {}) {
  const endpoint = await getEndpoint(url)
  return axios
    .get(endpoint, { params })
    .then((response) => response.data)
    .catch(async (error) => {
      await handleError(error)
      return error?.response?.data
    })
}

export async function postRequest(url: keyof EndpointType, values: unknown) {
  const endpoint = await getEndpoint(url)
  return await axios
    .post(endpoint, values)
    .then((response) => {
      return {
        success: true,
        data: response.data,
      }
    })
    .catch(async (error) => {
      await handleError(error)
      return {
        success: false,
        data: error?.response?.data,
      }
    })
}

const handleError = async (error: AxiosError) => {
  if (error?.response?.status === 401) {
    await logout()
  }
}
