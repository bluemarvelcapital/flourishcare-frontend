import { InternationalCandidateFormI } from "@/interface/internationalCandidateForm"

export const step3Validation = (values: InternationalCandidateFormI) => {
  const errors: Record<string, string> = {}
  if (/^\s*$/.test(values.previous_name_of_employer)) {
    errors.previous_name_of_employer = "Required"
  }
  if (/^\s*$/.test(values.previous_employer_address)) {
    errors.previous_employer_address = "Required"
  }
  if (/^\s*$/.test(values.previous_employment_length)) {
    errors.previous_employment_length = "Required"
  }
  if (/^\s*$/.test(values.previous_employment_salary)) {
    errors.previous_employment_salary = "Required"
  }
  if (/^\s*$/.test(values.previous_employement_start_date)) {
    errors.previous_employement_start_date = "Required"
  }
  if (/^\s*$/.test(values.previous_employement_end_date)) {
    errors.previous_employement_end_date = "Required"
  }
  if (/^\s*$/.test(values.previous_employment_duties)) {
    errors.previous_employment_duties = "Required"
  }
  if (/^\s*$/.test(values.previous_employment_required_weeks_notice)) {
    errors.previous_employment_required_weeks_notice = "Required"
  }
  if (/^\s*$/.test(values.previous_employment_reason_for_leaving)) {
    errors.previous_employment_reason_for_leaving = "Required"
  }

  return errors
}
