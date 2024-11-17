'use server'

import axios from 'axios'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const baseUrl = 'https://api.rci.rest'
const endpoints = {
  login: `${baseUrl}/auth/login`,
  profile: `${baseUrl}/auth/profile`,
}

export async function login(values: { email: string; password: string }) {
  return await axios
    .post(endpoints.login, values)
    .then((res) => {
      if (res?.data?.refreshToken) {
        cookies().set('refresh', res?.data?.refreshToken, {
          httpOnly: true,
          secure: true,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          sameSite: 'lax',
          path: '/',
        })
      }

      if (res?.data?.accessToken) {
        cookies().set('access', res?.data?.accessToken, {
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

  return await axios
    .get(endpoints.profile, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })
    .then((res) => {
      return {
        success: true,
        data: res?.data,
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
