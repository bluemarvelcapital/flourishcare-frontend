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

  return errors
}
