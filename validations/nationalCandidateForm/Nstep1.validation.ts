import { Nstep1I } from "@/interface/nationalCandidateForm"

export const Nstep1 = (values: Nstep1I) => {
  const errors: Record<string, string> = {}
  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  return errors
}
