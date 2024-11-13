'use server'

import { logout } from '@/app/(auth)/actions'
import axios, { AxiosError } from 'axios'
import { cookies } from 'next/headers'

const access = cookies().get('access')?.value

axios.interceptors.request.use((config) => {
  if (access) {
    config.headers.Authorization = `Bearer ${access}`
  }

  return config
})

export async function getRequest(url: string, params: unknown = {}) {
  return await axios
    .get(url, { params })
    .then((response) => response.data)
    .catch((error) => {
      handleError(error)
      return error?.response?.data
    })
}

export async function postRequest(url: string, values: unknown) {
  return await axios
    .post(url, values)
    .then((response) => response.data)
    .catch((error) => error?.response?.data)
}

const handleError = (error: AxiosError) => {
  if (error?.response?.status) {
    logout()
  }
}
