'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(data: {
  email: string;
  password: string;
}) {
  const response = await fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  console.log(response)
  
  const user = {
    id: 1,
    name: 'User',
    email: 'email@example.com',
    avatar: 'https://github.com/brunorocha-dev.png',
  }

  if(!user){
    return { message: 'Invalid credentials' }
  }

  cookies().set('session', 'JSON.stringify(user)', {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 60 * 60 * 1000),
    sameSite: 'lax',
    path: '/',
  });

  // redirect('/dashboard');
}

export async function logout() {
  cookies().delete('session');
  redirect('/');
}