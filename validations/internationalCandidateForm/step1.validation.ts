import { InternationalCandidateFormI } from "@/interface/internationalCandidateForm"

export const step1Validation = (values: InternationalCandidateFormI) => {
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
  if (/^$/.test(values.take_on_other_employement)) {
    errors.take_on_other_employement = "Required"
  }
  if (/^$/.test(values.nationality)) {
    errors.nationality = "Required"
  }
  if (/^$/.test(`${values.need_disability_related_adjustments}`)) {
    errors.need_disability_related_adjustments = "Required"
  }
  if (/^$/.test(`${values.health_support_needs}`)) {
    errors.health_support_needs = "Required"
  }
  if (!values.driving_license) {
    errors.driving_license = "Required"
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
