'use server'

import { postRequest } from "@/lib/requests";
import { endpoints } from "@/lib/variables";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(values: {
  email: string;
  password: string;
}) {
  const response = await postRequest(endpoints.login, values)
  if(response?.data?.accessToken){
    cookies().set('session', response.data.accessToken, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 60 * 60 * 1000),
      sameSite: 'lax',
      path: '/',
    });
    redirect('/dashboard')
  }

  return response
}

export async function logout() {
  cookies().delete('session');
  redirect('/');
}