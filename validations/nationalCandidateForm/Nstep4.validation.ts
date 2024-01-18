import { Nstep4I } from "@/interface/nationalCandidateForm"

export const Nstep4 = (values: Nstep4I) => {
  const errors: Record<string, string> = {}

  if (/^\s*$/.test(`${values.sign_date}`)) {
    errors.sign_date = "Required"
  }

  if (/^\s*$/.test(values.sign_full_name)) {
    errors.sign_full_name = "Required"
  }

  return errors
}
