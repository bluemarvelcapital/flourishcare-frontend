import { Nstep2I } from "@/interface/nationalCandidateForm"

export const Nstep2 = (values: Nstep2I) => {
  const errors: Record<string, string> = {}
  if (/^$/.test(values.post_applied)) {
    errors.post_applied = "Required"
  }
  if (/^$/.test(values.title)) {
    errors.title = "Required"
  }
  if (/^$/.test(values.first_name)) {
    errors.first_name = "Required"
  }
  if (/^$/.test(values.last_name)) {
    errors.last_name = "Required"
  }
  if (/^$/.test(values.home_phone)) {
    errors.home_phone = "Required"
  }
  if (/^$/.test(values.mobile_phone)) {
    errors.mobile_phone = "Required"
  }
  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  if (/^$/.test(values.sex)) {
    errors.sex = "Required"
  }
  if (/^$/.test(values.dob)) {
    errors.dob = "Required"
  }

  if (/^$/.test(`${values.over_18}`)) {
    errors.over_18 = "Required"
  }
  if (/^$/.test(values.national_insurance_number)) {
    errors.national_insurance_number = "Required"
  }
  if (/^$/.test(values.nationality)) {
    errors.nationality = "Required"
  }

  if (/^$/.test(values.general_pactitioner)) {
    errors.general_pactitioner = "Required"
  }

  if (/^$/.test(values.address)) {
    errors.address = "Required"
  }

  if (/^$/.test(values.street_address)) {
    errors.street_address = "Required"
  }
  if (/^$/.test(values.city)) {
    errors.city = "Required"
  }
  if (/^$/.test(values.country)) {
    errors.country = "Required"
  }
  if (/^$/.test(values.zip_code)) {
    errors.zip_code = "Required"
  }

  return errors
}