import { InternationalCandidateFormI } from "@/interface/internationalCandidateForm"

export const step4Validation = (values: InternationalCandidateFormI) => {
  const errors: Record<string, string> = {}
  if (/^\s*$/.test(values.referee_name1)) {
    errors.referee_name1 = "Required"
  }
  if (/^\s*$/.test(values.referee_job_title1)) {
    errors.referee_job_title1 = "Required"
  }
  if (/^\s*$/.test(values.referee_email_1)) {
    errors.referee_email_1 = "Required"
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.referee_email_1)
  ) {
    errors.referee_email_1 = "Invalid email address"
  }
  if (/^\s*$/.test(values.referee_phone_1)) {
    errors.referee_phone_1 = "Required"
  }
  if (/^\s*$/.test(values.referee_company_name1)) {
    errors.referee_company_name1 = "Required"
  }
  if (/^\s*$/.test(values.referee_address_1)) {
    errors.referee_address_1 = "Required"
  }
  if (/^\s*$/.test(values.can_contact_reference1)) {
    errors.can_contact_reference1 = "Required"
  }

  if (/^\s*$/.test(values.referee_name_2)) {
    errors.referee_name_2 = "Required"
  }
  if (/^\s*$/.test(values.referee_job_title_2)) {
    errors.referee_job_title_2 = "Required"
  }
  if (/^\s*$/.test(values.referee_email_2)) {
    errors.referee_email_2 = "Required"
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.referee_email_2)
  ) {
    errors.referee_email_2 = "Invalid email address"
  }
  if (/^\s*$/.test(values.referee_phone_2)) {
    errors.referee_phone_2 = "Required"
  }
  if (/^\s*$/.test(values.referee_company_name_2)) {
    errors.referee_company_name_2 = "Required"
  }
  if (/^\s*$/.test(values.referee_address_2)) {
    errors.referee_address_2 = "Required"
  }
  if (/^\s*$/.test(values.can_contact_reference_2)) {
    errors.can_contact_reference_2 = "Required"
  }

  if (/^\s*$/.test(values.emergency_contact_first_name)) {
    errors.emergency_contact_first_name = "Required"
  }
  if (/^\s*$/.test(values.emergency_contact_last_name)) {
    errors.emergency_contact_last_name = "Required"
  }
  if (/^\s*$/.test(values.emergency_contact_phone)) {
    errors.emergency_contact_phone = "Required"
  }
  if (/^\s*$/.test(values.emergency_contact_address)) {
    errors.emergency_contact_address = "Required"
  }

  if (/^\s*$/.test(values.emergency_contact_email)) {
    errors.emergency_contact_email = "Required"
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      values.emergency_contact_email
    )
  ) {
    errors.emergency_contact_email = "Invalid email address"
  }

  if (/^\s*$/.test(values.personal_attributes)) {
    errors.personal_attributes = "Required"
  }
  if (/^\s*$/.test(values.sign_full_name)) {
    errors.sign_full_name = "Required"
  }
  if (/^\s*$/.test(values.sign_date)) {
    errors.sign_date = "Required"
  }
  if (/^\s*$/.test(values.can_hold_details)) {
    errors.can_hold_details = "Required"
  }
  if (!values.cv) {
    errors.cv = "Required"
  }

  return errors
}
