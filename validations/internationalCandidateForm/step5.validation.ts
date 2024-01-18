import { InternationalCandidateFormI } from "@/interface/internationalCandidateForm"

export const step5Validation = (values: InternationalCandidateFormI) => {
  const errors: Record<string, string> = {}
  if (/^\s*$/.test(values.ethnicity)) {
    errors.ethnicity = "Required, please select an option above"
  }
  if (/^\s*$/.test(values.gender)) {
    errors.gender = "Required"
  }
  if (/^\s*$/.test(values.age_group)) {
    errors.age_group = "Required"
  }

  return errors
}
