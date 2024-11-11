'use server'

import { endpoints } from '@/lib/variables'
import axios from 'axios'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function login(values: { email: string; password: string }) {
  return await axios
    .post(endpoints.login, values)
    .then((response) => {
      if (response?.data?.accessToken) {
        cookies().set('session', response?.data?.accessToken, {
          httpOnly: true,
          secure: true,
          expires: new Date(Date.now() + 60 * 60 * 1000),
          sameSite: 'lax',
          path: '/',
        })

        return {
          success: true,
          message: 'Login successfully',
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
  cookies().delete('session')
  NextResponse.redirect('/')
}
