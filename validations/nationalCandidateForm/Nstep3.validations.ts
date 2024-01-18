import { Nstep3I } from "@/interface/nationalCandidateForm"

export const Nstep3 = (values: Nstep3I) => {
  const errors: Record<string, string> = {}
  if (/^\s*$/.test(values.paye_reference)) {
    errors.paye_reference = "Required"
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
  if (/^\s*$/.test(values.payroll_number)) {
    errors.payroll_number = "Required"
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

  if (/^\s*$/.test(`${values.sign_date}`)) {
    errors.sign_date = "Required"
  }
  if (/^\s*$/.test(values.national_insurance_number)) {
    errors.national_insurance_number = "Required"
  }
  if (/^\s*$/.test(values.nationality)) {
    errors.nationality = "Required"
  }

  if (/^\s*$/.test(values.sign_full_name)) {
    errors.sign_full_name = "Required"
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
  if (/^\s*$/.test(values.emergency_contact_name)) {
    errors.emergency_contact_name = "Required"
  }
  if (/^\s*$/.test(values.emergency_contact_phone)) {
    errors.emergency_contact_phone = "Required"
  }
  if (/^\s*$/.test(values.zip_code)) {
    errors.zip_code = "Required"
  }
  if (/^\s*$/.test(values.emergency_contact_relationship)) {
    errors.emergency_contact_relationship = "Required"
  }
  if (/^\s*$/.test(values.bank_name)) {
    errors.bank_name = "Required"
  }
  if (/^\s*$/.test(values.bank_account_name)) {
    errors.bank_account_name = "Required"
  }
  if (/^\s*$/.test(values.bank_account_number)) {
    errors.bank_account_number = "Required"
  }
  if (/^\s*$/.test(values.sort_code)) {
    errors.sort_code = "Required"
  }
  if (/^\s*$/.test(values.job_status)) {
    errors.job_status = "Required"
  }
  if (/^\s*$/.test(values.student_loan)) {
    errors.student_loan = "Required"
  }
  if (/^\s*$/.test(values.employment_start_date)) {
    errors.employment_start_date = "Required"
  }

  return errors
}
