'use server'

import axios from 'axios'

export async function getRequest(url: string) {
  return await axios.get(url)
}

export async function postRequest(url: string, values: any) {
  return await axios
    .post(url, values)
    .then((response) => response.data)
    .catch((error) => error?.response?.data)
}
