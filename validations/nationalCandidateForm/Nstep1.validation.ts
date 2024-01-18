import { Nstep1I } from "@/interface/nationalCandidateForm"

export const Nstep1 = (values: Nstep1I) => {
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
  if (/^\s*$/.test(`${values.right_to_work_in_uk}`)) {
    errors.right_to_work_in_uk = "Required"
  }
  if (/^\s*$/.test(`${values.eligible_to_work_in_uk}`)) {
    errors.eligible_to_work_in_uk = "Required"
  }
  if (/^\s*$/.test(values.dbs_certified)) {
    errors.dbs_certified = "Required"
  }
  if (/^\s*$/.test(`${values.driving_license}`)) {
    errors.driving_license = "Required"
  }
  if (/^\s*$/.test(`${values.own_transport}`)) {
    errors.own_transport = "Required"
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
  if (!values.proof_of_address1) {
    errors.proof_of_address1 = "Required"
  }
  if (!values.proof_of_address2) {
    errors.proof_of_address2 = "Required"
  }

  return errors
}
