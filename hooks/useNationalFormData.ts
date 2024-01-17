import { NationalFormI } from "@/interface/nationalCandidateForm"
import dayjs from "dayjs"
import { useSessionStorage } from "usehooks-ts"

const initialData: NationalFormI = {
  post_applied: "",
  title: "",
  first_name: "",
  last_name: "",
  other_names: "",
  home_phone: "",
  mobile_phone: "",
  email: "",
  sex: "",
  dob: "",
  over_18: "",
  national_insurance_number: "",
  nationality: "",
  eligible_to_work_in_uk: "",
  right_to_work_in_uk: "",
  dbs_certified: "",
  address: "",
  street_address: "",
  city: "",
  country: "",
  zip_code: "",
  proof_of_address1: "",
  proof_of_address2: "",
  general_pactitioner: "",
  paye_reference: "",
  emergency_contact_name: "",
  emergency_contact_relationship: "",
  emergency_contact_phone: "",
  bank_name: "",
  bank_account_number: "",
  bank_account_name: "",
  sort_code: "",
  job_status: "",
  student_loan: "",
  employment_start_date: "",
  sign_full_name: "",
  sign_date: "",
  driving_license: "",
  payroll_number: "",
  own_transport: "",
}

export const useNationalFormData = () => {
  const [formData, setFormData] = useSessionStorage<NationalFormI>(
    "NationalFormData",
    initialData
  )

  // setFormData(initialData)

  return { formData, setFormData }
}
