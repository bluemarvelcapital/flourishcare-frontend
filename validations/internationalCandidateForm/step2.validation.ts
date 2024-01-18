import { InternationalCandidateFormI } from "@/interface/internationalCandidateForm"

export const step2Validation = (values: InternationalCandidateFormI) => {
  const errors: Record<string, string> = {}

  if (!values.ever_convicted_of_a_criminal_offence) {
    errors.ever_convicted_of_a_criminal_offence = "Required"
  }
  if (!values.pending_prosecutions) {
    errors.pending_prosecutions = "Required"
  }
  if (!values.registered_disabled) {
    errors.registered_disabled = "Required"
  }
  if (/^\s*$/.test(values.education_date_obtained)) {
    errors.education_date_obtained = "Required"
  }
  if (/^\s*$/.test(values.education_place_of_study)) {
    errors.education_place_of_study = "Required"
  }
  if (/^\s*$/.test(values.education_grade)) {
    errors.education_grade = "Required"
  }
  if (/^\s*$/.test(values.other_qualification_date_obtained)) {
    errors.other_qualification_date_obtained = "Required"
  }
  if (/^\s*$/.test(values.other_qualification_place_of_study)) {
    errors.other_qualification_place_of_study = "Required"
  }
  if (/^\s*$/.test(values.other_qualification_grade)) {
    errors.other_qualification_grade = "Required"
  }

  return errors
}
