'use server'

import { getEndpoint } from '@/lib/endpoints'
import axios from 'axios'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const baseUrl = 'https://api.rci.rest'
const endpoints = {
  login: `${baseUrl}/auth/login`,
  profile: `${baseUrl}/auth/profile`,
}

export async function login(values: { email: string; password: string }) {
  const endpoint = await getEndpoint('login')
  return await axios
    .post(endpoint, values)
    .then((res) => {
      if (res?.data?.data?.refresh) {
        cookies().set('refresh', res?.data?.data?.refresh, {
          httpOnly: true,
          secure: true,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          sameSite: 'lax',
          path: '/',
        })
      }
      if (res?.data?.data?.access) {
        cookies().set('access', res?.data?.data?.access, {
          httpOnly: true,
          secure: true,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          sameSite: 'lax',
          path: '/',
        })

        return {
          success: true,
          message: 'Logged in successfully',
        }
      }

      return {
        success: false,
        message: 'Something went wrong. Please try again',
      }
    })
    .catch((error) => {
      return {
        success: false,
        message: error?.response?.data?.message || 'Something went wrong. Please try again',
      }
    })
}

export async function profile() {
  const access = cookies().get('access')?.value

  if (!access) {
    return {
      success: false,
      data: null,
      message: 'Unauthorized. Please login',
    }
  }

  const endpoint = await getEndpoint('profile')
  return await axios
    .get(endpoint, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })
    .then((res) => {
      return {
        success: true,
        data: res?.data?.data,
      }
    })
    .catch((error) => {
      return {
        success: false,
        data: null,
        message: error?.response?.data?.message || 'Something went wrong. Please try again',
      }
    })
}

export async function logout() {
  cookies().delete('access')
  cookies().delete('refresh')
  redirect('/login')
}
