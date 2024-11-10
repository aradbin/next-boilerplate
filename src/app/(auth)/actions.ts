'use server'

import { postRequest } from "@/lib/requests";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(values: {
  email: string;
  password: string;
}) {
  const response = await postRequest('https://api.rci.rest/auth/login', values)
  console.log(response)
  // if(!response.data.accessToken){
  //   return { error: 'Invalid credentials' }
  // }

  // cookies().set('session', response.data.accessToken, {
  //   httpOnly: true,
  //   secure: true,
  //   expires: new Date(Date.now() + 60 * 60 * 1000),
  //   sameSite: 'lax',
  //   path: '/',
  // });

  // redirect('/dashboard');
}

export async function logout() {
  cookies().delete('session');
  redirect('/');
}