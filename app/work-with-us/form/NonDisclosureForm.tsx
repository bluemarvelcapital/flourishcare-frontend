import { Button } from "@/components/Button"
import { DatePicker, Form, Input } from "antd"
import React from "react"

export const NonDisclosureForm = () => {
  return (
    <div className="py-10 px-6 bg-white transition-all">
      <h3 className="text-2xl font-semibold mb-4">Non-Disclosure Form</h3>
      <p className="mb-5">
        During the course of my engagement with Client (referred to as the
        ‘Client’), I may learn of confidential information relating to the
        Client. Confidential information includes matters not generally known
        outside the Client, and includes various developments, inventions,
        improvements, methods, etc., relating to products, services marketed or
        used by the Client (e.g. relating to sales, costs, profits,
        organisation, customer lists, pricing methods, etc.). I agree not to
        disclose any confidential information to others or to make use of it
        either during or after my engagement by the Client, whether or not such
        information is produced by my own efforts, except as expressly permitted
        in writing by the Client. Also, I may learn of apparatus, methods, ways
        of business, etc., which in themselves are generally known but whose use
        by the Client is not generally known, and I agree not to disclose to
        others such use, either during or after my engagements. All inventions,
        discoveries, developments and improvements (hereafter referred to as
        ‘Inventions’) made or conceived during the course of my engagement with
        the Client, whether the same are patentable or not, shall become and
        remain the sole and exclusive property of the Client. I agree to notify
        immediately the Client in writing of such Inventions, and hereby
        transfer all rights title and interest in and to any such Inventions to
        the Client. I hereby assign to the Client all rights title and interest
        in and to all copyrights on all writings, documents, reports, computer
        programs and other works made or written by me during the course of my
        engagement with the Client. My obligations under this Agreement shall
        survive the termination of my engagement with the Client regardless of
        the manner of such termination, and shall be binding upon my heirs,
        executors and administrators.
      </p>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Form.Item label="Signed" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Name" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
            <p>
              <small>Printed Name as the signature.</small>
            </p>
          </Form.Item>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="Date" required className="font-semibold">
            <DatePicker className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>
        <div className="md:w-[60%] md:mx-auto my-5">
          <Button
            type="submit"
            className="w-full rounded-[100px] text-xl"
            style={{ borderRadius: "100px" }}
          >
            Submit Form
          </Button>
        </div>
      </div>
    </div>
  )
}
