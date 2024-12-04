"use client";
import {
  Button as AntButton,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Upload,
} from "antd";
import React from "react";
import { countries } from "@/constants/countries";
import { UploadOutlined } from "@ant-design/icons";
import { Button } from "@/components/Button";
import { Formik } from "formik";
import { Nstep1 } from "@/validations/nationalCandidateForm/Nstep1.validation";
import { Nstep1I } from "@/interface/nationalCandidateForm";
import { useNationalFormData } from "@/hooks/useNationalFormData";
import moment from "moment";
import dayjs from "dayjs";

interface RegistrationFormProps {
  next: () => void;
  setAttachments: React.Dispatch<React.SetStateAction<any[]>>;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  next,
  setAttachments,
}) => {
  const [hasOtherName, setHasOtherName] = React.useState<"yes" | "no" | "">("");
  const { formData, setFormData } = useNationalFormData();
  return (
    <div className="py-10 px-6 bg-white transition-all">
      <h3 className="text-2xl font-semibold mb-4">Personal Details</h3>
      <Formik
        initialValues={formData}
        validate={Nstep1}
        onSubmit={(values, { setSubmitting }) => {
          setFormData((prev) => ({ ...prev, ...values }));
          next();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setValues,
          isValid,

          /* and other goodies */
        }) => (
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Post Applied For:"
              required
              className="font-semibold"
            >
              <Input
                className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.post_applied}
                name="post_applied"
              />
              <span className="text-error">
                {errors.post_applied &&
                  touched.post_applied &&
                  errors.post_applied}
              </span>
            </Form.Item>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item label="Title" required className="font-semibold">
                <Select
                  className="border-[#00000060] h-[2rem] w-full focus:border-success hover:border-success"
                  style={{ height: "3.1rem" }}
                  size="large"
                  placeholder="Select"
                  options={[
                    { value: "Mr", label: "Mr" },
                    { value: "Mrs", label: "Mrs" },
                    { value: "Miss", label: "Miss" },
                    { value: "Ms", label: "Ms" },
                  ]}
                  onChange={(value) => setValues({ ...values, title: value })}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <span className="text-error">
                  {errors.title && touched.title && errors.title}
                </span>
              </Form.Item>
              <Form.Item label="First Name" required className="font-semibold">
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="first_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                />
                <span className="text-error">
                  {errors.first_name && touched.first_name && errors.first_name}
                </span>
              </Form.Item>
              <Form.Item label="Last Name" required className="font-semibold">
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="last_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                />
                <span className="text-error">
                  {errors.last_name && touched.last_name && errors.last_name}
                </span>
              </Form.Item>
            </div>

            {/********************************** Has Other Names **********************************/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item
                label="Have you ever been known by any other names?"
                className="font-semibold"
              >
                <Radio.Group
                  onChange={(e) => setHasOtherName(e.target.value)}
                  value={hasOtherName}
                >
                  <Radio value={"yes"}>Yes</Radio>
                  <Radio value={"no"}>No</Radio>
                </Radio.Group>
              </Form.Item>
              {hasOtherName === "yes" && (
                <Form.Item
                  label="Enter Other Names"
                  className="font-semibold md:col-span-2"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    value={values.other_names}
                    onChange={handleChange}
                    name="other_names"
                    onBlur={handleBlur}
                  />
                </Form.Item>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item
                label="Home Telephone Number"
                required
                className="font-semibold"
              >
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  type="number"
                  name="home_phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.home_phone}
                />
                <span className="text-error">
                  {errors.home_phone && touched.home_phone && errors.home_phone}
                </span>
              </Form.Item>
              <Form.Item
                label="Mobile Telephone Number"
                required
                className="font-semibold"
              >
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  type="number"
                  name="mobile_phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobile_phone}
                />
                <span className="text-error">
                  {errors.mobile_phone &&
                    touched.mobile_phone &&
                    errors.mobile_phone}
                </span>
              </Form.Item>
              <Form.Item label="Email" required className="font-semibold">
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span className="text-error">
                  {errors.email && touched.email && errors.email}
                </span>
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item label="Sex" required className="font-semibold">
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="sex"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sex}
                />
                <span className="text-error">
                  {errors.sex && touched.sex && errors.sex}
                </span>
              </Form.Item>
              <Form.Item
                label="Date of Birth"
                required
                className="font-semibold "
              >
                <DatePicker
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="dob"
                  onChange={(date, dateStr) => {
                    console.log(date, dateStr);
                    setValues((prev: any) => ({
                      ...prev,
                      dob: dateStr,
                    }));
                  }}
                  onBlur={handleBlur}
                  // value={dayjs(values.dob)}
                />
                <span className="text-error">
                  {errors.dob && touched.dob && errors.dob}
                </span>
              </Form.Item>
              <Form.Item
                label="Are you aged 18 years or over?"
                required
                className="font-semibold"
              >
                <Radio.Group
                  name="over_18"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.over_18}
                >
                  <Radio value={"yes"}>Yes</Radio>
                  <Radio value={"no"}>No</Radio>
                </Radio.Group>
                <p className="text-error">
                  {errors.over_18 && touched.over_18 && errors.over_18}
                </p>
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item
                label="National Insurance Number (NI)"
                required
                className="font-semibold"
              >
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="national_insurance_number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.national_insurance_number}
                />
                <span className="text-error">
                  {errors.national_insurance_number &&
                    touched.national_insurance_number &&
                    errors.national_insurance_number}
                </span>
              </Form.Item>
              <Form.Item
                label="Nationality"
                required
                className="font-semibold "
              >
                <Select
                  className="border-[#00000060] h-[2rem] w-full focus:border-success hover:border-success"
                  style={{ height: "3.1rem" }}
                  size="large"
                  placeholder="Select"
                  options={countries}
                  showSearch
                  onChange={(value) =>
                    setValues({ ...values, nationality: value })
                  }
                  onBlur={handleBlur}
                  value={values.nationality}
                />
                <span className="text-error">
                  {errors.nationality &&
                    touched.nationality &&
                    errors.nationality}
                </span>
              </Form.Item>
              <Form.Item
                label="Are you eligible to work in the UK?"
                required
                className="font-semibold"
              >
                <Radio.Group
                  name="eligible_to_work_in_uk"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eligible_to_work_in_uk}
                >
                  <Radio value={"yes"}>Yes</Radio>
                  <Radio value={"no"}>No</Radio>
                </Radio.Group>
                <p className="text-error">
                  {errors.eligible_to_work_in_uk &&
                    touched.eligible_to_work_in_uk &&
                    errors.eligible_to_work_in_uk}
                </p>
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Form.Item
                label="Right To Work (RTW) in the UK – Acceptable proof"
                required
                className="font-semibold"
              >
                <Radio.Group
                  name="right_to_work_in_uk"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.right_to_work_in_uk}
                >
                  <Space direction="vertical" className="font-normal">
                    <Radio value={"british_passport"}>British Passport</Radio>
                    <Radio value={"eu_passport"}>
                      EU Passport / EU ID Card with proof of settlement
                    </Radio>
                    <Radio value={"others"}>
                      NON-UK & EU Passports should be accompanied with a BRP
                      Card
                    </Radio>
                  </Space>
                </Radio.Group>
                <p className="text-error">
                  {errors.right_to_work_in_uk &&
                    touched.right_to_work_in_uk &&
                    errors.right_to_work_in_uk}
                </p>
              </Form.Item>
              <Form.Item
                label="Disclosure and Barring Service (DBS) Certified?"
                required
                className="font-semibold"
              >
                <Radio.Group
                  name="dbs_certified"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dbs_certified}
                >
                  <Radio value={"yes"}>Yes</Radio>
                  <Radio value={"no"}>No</Radio>
                </Radio.Group>
                <p className="text-error">
                  {errors.dbs_certified &&
                    touched.dbs_certified &&
                    errors.dbs_certified}
                </p>
              </Form.Item>
            </div>

            <div className="flex md:flex-row flex-col gap-8 justify-between md:items-center">
              <Form.Item
                label="Do you have a current full driving license?"
                required
                className="font-semibold"
              >
                <Radio.Group
                  name="driving_license"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.driving_license}
                >
                  <Radio value={"yes"}>Yes</Radio>
                  <Radio value={"no"}>No</Radio>
                </Radio.Group>
                <p className="text-error">
                  {errors.driving_license &&
                    touched.driving_license &&
                    errors.driving_license}
                </p>
              </Form.Item>

              <Form.Item
                label="Do you have your own transport?"
                required
                className="font-semibold"
              >
                <Radio.Group
                  name="own_transport"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.own_transport}
                >
                  <Radio value={"yes"}>Yes</Radio>
                  <Radio value={"no"}>No</Radio>
                </Radio.Group>
                <p className="text-error">
                  {errors.own_transport &&
                    touched.own_transport &&
                    errors.own_transport}
                </p>
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item
                label="Street Address"
                required
                className="font-semibold"
              >
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="street_address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.street_address}
                />
                <span className="text-error">
                  {errors.street_address &&
                    touched.street_address &&
                    errors.street_address}
                </span>
              </Form.Item>
              <Form.Item label="City" required className="font-semibold ">
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
                <span className="text-error">
                  {errors.city && touched.city && errors.city}
                </span>
              </Form.Item>
              <Form.Item label="Country" required className="font-semibold ">
                <Select
                  className="border-[#00000060] h-[2rem] w-full focus:border-success hover:border-success"
                  style={{ height: "3.1rem" }}
                  size="large"
                  placeholder="Select"
                  options={countries}
                  showSearch
                  onChange={(value) => setValues({ ...values, country: value })}
                  onBlur={handleBlur}
                  value={values.country}
                />
                <span className="text-error">
                  {errors.country && touched.country && errors.country}
                </span>
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item
                label="Zip/Postal Code"
                required
                className="font-semibold"
              >
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="zip_code"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.zip_code}
                />
                <span className="text-error">
                  {errors.zip_code && touched.zip_code && errors.zip_code}
                </span>
              </Form.Item>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#EB270B] mt-[3rem]">
                Proof of Address:
              </h3>
              <p className="md:text-lg">
                Please upload 2 (two) items stating your full name and current
                home address- Accepted Documents – A utility bill (gas,
                electric, satellite television, – Landline phone bill) issued
                within the last three months – Local authority council tax bill
                for the current council tax year – Bank, Building Society
                statement (last three months) – Original mortgage statement from
                a recognised lender issued for the last full year – HMRC
                correspondence within the current financial year (e.g. P45 /
                P60, self-assessment letter, tax demand, etc.)
              </p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 my-10 gap-8">
              <Form.Item
                label="Proof of address 1"
                required
                className="font-semibold"
              >
                <input
                  accept=".pdf, .docx, .doc"
                  type="file"
                  className="p-3 border-[1px] rounded-md"
                  name="proof_of_address1"
                  // value={values.proof_of_address1}
                  onChange={(e) => {
                    setValues({
                      ...values,
                      proof_of_address1: e.target.value,
                    });
                    setAttachments((prev) => [
                      ...prev,
                      {
                        filename: "Proof of address 1",
                        content: e.target.files![0],
                      },
                    ]);
                  }}
                />
                <p className="text-error">
                  {errors.proof_of_address1 &&
                    touched.proof_of_address1 &&
                    errors.proof_of_address1}
                </p>
              </Form.Item>
              <Form.Item
                label="Proof of address 2"
                required
                className="font-semibold"
              >
                <input
                  accept=".pdf, .docx, .doc"
                  type="file"
                  className="p-3 border-[1px] rounded-md"
                  name="proof_of_address2"
                  // value={values.proof_of_address2}
                  onChange={(e) => {
                    setValues({
                      ...values,
                      proof_of_address2: e.target.value,
                    });
                    setAttachments((prev) => [
                      ...prev,
                      {
                        filename: "Proof of address 2",
                        content: e.target.files![0],
                      },
                    ]);
                  }}
                />
                <p className="text-error">
                  {errors.proof_of_address2 &&
                    touched.proof_of_address2 &&
                    errors.proof_of_address2}
                </p>
              </Form.Item>
            </div>

            <div className="md:w-[60%] md:mx-auto">
              <Button
                className={`w-full rounded-[100px] text-xl ${
                  !isValid && "cursor-not-allowed"
                }`}
                style={{
                  borderRadius: "100px",
                  background: !isValid ? "gray" : "",
                }}
                type="submit"
              >
                Next
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
