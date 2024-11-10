'use server'

import axios, { AxiosResponse } from "axios"

export async function getRequest(url: string) {
  return await axios.get(url)
    .then((d: AxiosResponse<any>) => d.data)
    .catch((error) => {
      console.log(error)
    })
}

export async function postRequest(url: string, values: any) {
  return await axios.post(url, values)
    .catch((error) => {
      console.log(error)
    })
}