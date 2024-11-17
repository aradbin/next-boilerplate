export type EndpointType = {
  users: string
}

export type FormFieldType = {
  form: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any
  }
  data: {
    name: string
    label?: string
    type?: string
    placeholder?: string
    description?: string
  }
}

export type UserType = {
  id: string
  name: string
  email: string
  contact: string
  avatar: string
}
