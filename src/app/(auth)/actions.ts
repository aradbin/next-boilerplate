'use server'

import { endpoints } from '@/lib/variables'
import axios from 'axios'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(values: { email: string; password: string }) {
  return await axios
    .post(endpoints.login, values)
    .then((res) => {
      if (res?.data?.data?.access) {
        cookies().set('access', res?.data?.data?.access, {
          httpOnly: true,
          secure: true,
          expires: new Date(Date.now() + 60 * 60 * 1000),
          sameSite: 'lax',
          path: '/',
        })

        cookies().set('refresh', res?.data?.data?.refresh, {
          httpOnly: true,
          secure: true,
          expires: new Date(Date.now() + 60 * 60 * 1000),
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

export async function logout() {
  cookies().delete('access')
  redirect('/')
}
