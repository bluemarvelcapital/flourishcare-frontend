import { Nstep2I } from "@/interface/nationalCandidateForm"

export const Nstep2 = (values: Nstep2I) => {
  const errors: Record<string, string> = {}
  if (/^\s*$/.test(values.post_applied)) {
    errors.post_applied = "Required"
  }
  if (/^\s*$/.test(values.title)) {
    errors.title = "Required"
  }
  if (/^\s*$/.test(values.first_name)) {
    errors.first_name = "Required"
  }
  if (/^\s*$/.test(values.last_name)) {
    errors.last_name = "Required"
  }
  if (/^\s*$/.test(values.home_phone)) {
    errors.home_phone = "Required"
  }
  if (/^\s*$/.test(values.mobile_phone)) {
    errors.mobile_phone = "Required"
  }
  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  if (/^\s*$/.test(values.sex)) {
    errors.sex = "Required"
  }
  if (/^\s*$/.test(values.dob)) {
    errors.dob = "Required"
  }

  if (/^\s*$/.test(`${values.over_18}`)) {
    errors.over_18 = "Required"
  }
  if (/^\s*$/.test(values.national_insurance_number)) {
    errors.national_insurance_number = "Required"
  }
  if (/^\s*$/.test(values.nationality)) {
    errors.nationality = "Required"
  }

  if (/^\s*$/.test(values.general_pactitioner)) {
    errors.general_pactitioner = "Required"
  }

  if (/^\s*$/.test(values.address)) {
    errors.address = "Required"
  }

  if (/^\s*$/.test(values.street_address)) {
    errors.street_address = "Required"
  }
  if (/^\s*$/.test(values.city)) {
    errors.city = "Required"
  }
  if (/^\s*$/.test(values.country)) {
    errors.country = "Required"
  }
  if (/^\s*$/.test(values.zip_code)) {
    errors.zip_code = "Required"
  }

  return errors
}
