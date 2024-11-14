export const baseUrl = 'https://api.rci.rest'

export const endpoints = {
  // auth
  login: `${baseUrl}/auth/login`,
  profile: `${baseUrl}/auth/profile`,

  // user
  users: `${baseUrl}/users`,
}

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'Arabic' },
]
