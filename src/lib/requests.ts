'use server'

import axios from 'axios'
import { cookies } from 'next/headers'

const access = cookies().get('access')?.value

axios.interceptors.request.use((config) => {
  if (access) {
    config.headers.Authorization = `Bearer ${access}`
  }

  return config
})

export async function getRequest(url: string, params: any = {}) {
  return await axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => error?.response?.data)
}

export async function postRequest(url: string, values: any) {
  return await axios
    .post(url, values)
    .then((response) => response.data)
    .catch((error) => error?.response?.data)
}
