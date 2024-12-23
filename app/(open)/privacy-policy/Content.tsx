import Link from "next/link"
import React from "react"

export const Content = () => {
  return (
    <div className="p-5 privacy">
      <h2>What we collect</h2>
      <p>We may collect the following information:</p>
      <ul className="list-disc ml-10">
        <li>Name and job title</li>
        <li>Contact information including email address</li>
        <li>
          Demographic information such as postcode, preferences and interests
        </li>
        <li>Other information relevant to customer surveys and/or offers</li>
      </ul>
      <h2>What we do with the information we gather</h2>
      <p>
        We require this information to understand your needs and provide you
        with a better service, and in particular for the following reasons:
      </p>
      <ul className="list-disc ml-10">
        <li>Internal record keeping.</li>
        <li>
          We may use the information to improve our products and services.
        </li>
        <li>
          We may periodically send promotional emails about new products,
          special offers or other information which we think you may find
          interesting using the email address which you have provided.
        </li>
        <li>
          From time to time, we may also use your information to contact you for
          market research purposes. We may contact you by email, phone, fax or
          mail. We may use the information to customise the website according to
          your interests.
        </li>
      </ul>
      <h2>Security</h2>
      <p>
        We are committed to ensuring that your information is secure. In order
        to prevent unauthorised access or disclosure, we have put in place
        suitable physical, electronic and managerial procedures to safeguard and
        secure the information we collect online.
      </p>
      <h2>How we use cookies</h2>
      <p>
        A cookie is a small file which asks permission to be placed on your
        computer’s hard drive. Once you agree, the file is added and the cookie
        helps analyse web traffic or lets you know when you visit a particular
        site. Cookies allow web applications to respond to you as an individual.
        The web application can tailor its operations to your needs, likes and
        dislikes by gathering and remembering information about your
        preferences.
      </p>
      <p>
        We use traffic log cookies to identify which pages are being used. This
        helps us analyse data about web page traffic and improve our website in
        order to tailor it to customer needs. We only use this information for
        statistical analysis purposes and then the data is removed from the
        system.
      </p>
      <p>
        Overall, cookies help us provide you with a better website, by enabling
        us to monitor which pages you find useful and which you do not. A cookie
        in no way gives us access to your computer or any information about you,
        other than the data you choose to share with us.
      </p>
      <p>
        You can choose to accept or decline cookies. Most web browsers
        automatically accept cookies, but you can usually modify your browser
        setting to decline cookies if you prefer. This may prevent you from
        taking full advantage of the website.
      </p>
      <h2> Links to other websites</h2>
      <p>
        Our website may contain links to other websites of interest. However,
        once you have used these links to leave our site, you should note that
        we do not have any control over that other website. Therefore, we cannot
        be responsible for the protection and privacy of any information which
        you provide whilst visiting such sites and such sites are not governed
        by this privacy statement. You should exercise caution and look at the
        privacy statement applicable to the website in question.
      </p>
      <h2> Controlling your personal information</h2>
      <p>
        You may choose to restrict the collection or use of your personal
        information in the following ways:
      </p>
      <ul className="list-disc ml-10">
        <li>
          Whenever you are asked to fill in a form on the website, look for the
          box that you can click to indicate that you do not want the
          information to be used by anybody for direct marketing purposes
        </li>
        <li>
          If you have previously agreed to us using your personal information
          for direct marketing purposes, you may change your mind at any time by
          writing to or emailing us at{" "}
          <Link
            href="mailto:info@flourishadvancedcare.co.uk"
            className="text-primary"
          >
            info@flourishadvancedcare.co.uk
          </Link>
        </li>
      </ul>
      <p>
        We will not sell, distribute or lease your personal information to third
        parties unless we have your permission or are required by law to do so.
        We may use your personal information to send you promotional information
        about third parties which we think you may find interesting if you tell
        us that you wish this to happen.
      </p>
      <p>
        You may request details of personal information which we hold about you
        under the Data Protection Act 1998. A small fee will be payable. If you
        would like a copy of the information held on you, please write to the
        Registered Address: 39 Priestleys, Luton, England, LU1 5QL.
      </p>
      <p>
        If you believe that any information, we are holding on you is incorrect
        or incomplete, please write to or email us as soon as possible, at the
        above address. We will promptly correct any information found to be
        incorrect.
      </p>
      <h2>Website Privacy Notice</h2>
      <p>
        Any data that you submit using this web form will be held by Community
        Care Personnel Ltd as Data Controller and will be held securely and in
        accordance with the General Data Protection Regulation (the Data
        Protection Act 2018) for 12 months before being securely and
        confidentially destroyed.
      </p>
      <p>
        Your data will not be disclosed to any third parties without your
        consent or as otherwise allowed by the relevant Data Protection
        legislation and will only be used for responding to your query (or
        purposes associated with that purpose).
      </p>
      <p>
        You have the right to be informed about what data we hold about you
        along with other rights set out in the legislation. Further information
        about your rights under the data protection legislation can be found at{" "}
        <Link href={"www.ico.org.uk"} target="_blank" className="text-primary">
          www.ico.org.uk
        </Link>
      </p>
      <p>Thank You.</p>
    </div>
  )
}
