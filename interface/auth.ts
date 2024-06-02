export interface LoginRequestI {
  email: string
  password: string
}

export interface SignUpRequestI {
  email: string
  password: string
  fullname: string
  confirm_password: string
}
