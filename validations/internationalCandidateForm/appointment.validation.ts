interface ContactFormDetails {
  name: string
  email: string
  date: string
  message: string
  phone: string
}

export const appointmentFormValidation = (values: ContactFormDetails) => {
  const errors: Record<string, string> = {}
  if (/^\s*$/.test(values.name)) {
    errors.name = "Required, please select an option above"
  }
  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  if (/^\s*$/.test(values.date)) {
    errors.date = "Required"
  }
  if (/^\s*$/.test(values.phone)) {
    errors.phone = "Required"
  }
  if (/^\s*$/.test(values.message)) {
    errors.message = "Required"
  }

  return errors
}
