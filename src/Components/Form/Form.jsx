import { sendForm } from "@emailjs/browser";
import { useFormik } from "formik";
import { div } from "motion/react-client";
import React, { useRef, useState } from "react";
import * as Yup from "yup";

export default function Form() {
  const form = useRef();
  let [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const sendEmail = () => {
    setLoading(true);
    setError("");
    setSuccess("");
    sendForm(
      "service_es6a31h",
      "template_3k8bq62",
      form.current,
      "c0fgF3RMKcWu3WsXy",
    )
      .then((result) => {
        console.log(result.text);
        // form.current.reset();
        formik.resetForm();
        setSuccess("Message Sent Successfully  ✅ ");
      })
      .catch((error) => {
        console.log(error.text);
        setError(" ❌Falied to send Message . please try again .");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  let validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min length is 3 ")
      .max(12, "Max length is 12 ")
      .required("Name Is Required"),
    companyName: Yup.string()
      .min(3, "Min length is 3 ")
      .max(12, "Max length is 12 ")
      .required("companyName Is Required"),
    mail: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string()
      .min(10, "Min length is 10")
      .max(100, "Max length is 100 ")
      .required("Message is required"),
    service: Yup.string()
      .min(3, "Min length is 3 ")
      .max(12, "Max length is 12 ")
      .required("service Is Required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\+?[0-9]{7,15}$/, "Enter a valid phone number"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      companyName: "",
      mail: "",
      message: "",
      phone: "",
      service: "",
    },
    validationSchema: validationSchema,
    onSubmit: sendEmail,
  });
  return (
    <>
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Request For Qutation
        </h2>
        <form ref={form} onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium px-2 text-gray-900 "
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Your Name"
              required
              id="name"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5  "
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm mt-1 px-4">
                {formik.errors.name}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="CompanyName"
              className="block mb-2 text-sm font-medium px-2 text-gray-900 "
            >
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="CompanyName"
              onChange={formik.handleChange}
              value={formik.values.companyName}
              onBlur={formik.handleBlur}
              placeholder="Enter Your Company Name"
              required
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5  "
            />
            {formik.touched.companyName && formik.errors.companyName && (
              <div className="text-red-500 text-sm mt-1 px-4">
                {formik.errors.companyName}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="Phone"
              className="block mb-2 text-sm font-medium px-2 text-gray-900 "
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="Phone"
              placeholder=" Enter Your Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5  "
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-sm mt-1 px-4">
                {formik.errors.phone}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="Service"
              className="block mb-2 text-sm font-medium px-2 text-gray-900 "
            >
              Service
            </label>
            <input
              type="text"
              name="service"
              id="Service"
              value={formik.values.service}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder=" Enter Your service"
              required
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5  "
            />
            {formik.touched.service && formik.errors.service && (
              <div className="text-red-500 text-sm mt-1 px-4">
                {formik.errors.service}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="Email"
              className="block mb-2 text-sm font-medium px-2 text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              name="mail"
              id="Email"
              value={formik.values.mail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder=" Enter Your mail"
              required
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5  "
            />
            {formik.touched.mail && formik.errors.mail && (
              <div className="text-red-500 text-sm mt-1 px-4">
                {formik.errors.mail}
              </div>
            )}
          </div>

          <div>
            <input type="hidden" name="from_name" value={"Expand Trading Co"} />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 px-2"
            >
              Your message
            </label>
            <textarea
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg "
              placeholder="Write your thoughts here..."
            ></textarea>

            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500 text-sm mt-1 px-4">
                {formik.errors.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 text-white  transition-colors rounded ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#d74d1e] text-white"
            }`}
          >
            {loading ? "Sending" : "Send"}
          </button>
          {error && <div className="text-red-600 text-xl p-2 ">{error}</div>}
          {success && (
            <div className="text-green-600 text-xl p-2 ">{success}</div>
          )}
        </form>
      </div>
    </>
  );
}
