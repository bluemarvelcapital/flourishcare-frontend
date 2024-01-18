import { InternationalCandidateFormI } from "@/interface/internationalCandidateForm"

export const step1Validation = (values: InternationalCandidateFormI) => {
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
  if (/^\s*$/.test(values.take_on_other_employement)) {
    errors.take_on_other_employement = "Required"
  }
  if (/^\s*$/.test(values.nationality)) {
    errors.nationality = "Required"
  }
  if (/^\s*$/.test(`${values.need_disability_related_adjustments}`)) {
    errors.need_disability_related_adjustments = "Required"
  }
  if (/^\s*$/.test(`${values.health_support_needs}`)) {
    errors.health_support_needs = "Required"
  }
  if (!values.driving_license) {
    errors.driving_license = "Required"
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
  if (!values.passport) {
    errors.passport = "Required"
  }
  if (!values.photo_passport) {
    errors.photo_passport = "Required"
  }
  if (!values.ielts_result) {
    errors.ielts_result = "Required"
  }
  if (!values.proof_of_covid_vaccination) {
    errors.proof_of_covid_vaccination = "Required"
  }
  if (!values.evidence_of_TB_test_result) {
    errors.evidence_of_TB_test_result = "Required"
  }

  return errors
}
