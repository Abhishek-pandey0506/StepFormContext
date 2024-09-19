import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const Form2 = ({ nextStep, prevStep, handleChange, values }) => {
  const yupValidate = Yup.object().shape({
    address: Yup.string()
    .required("Address is Required"),
    district: Yup.string()
    .required("District is Required")
    .matches(/^[a-zA-Z'-\s]*$/, 'Invalid District'),
    state: Yup.string().required("State is Required"),
    pincode: Yup.string()
    .length(6, "Check pinCode")
    .required("PinCode Required"),
  });

  const formik = useFormik({
    initialValues: {
      address: values.address || "",
      district: values.district || "",
      state: values.state || "",
      pincode: values.pincode || "",
    },
    validationSchema: yupValidate,
    onSubmit: (values) => {
      console.log(values);
      handleChange(values)
      nextStep()
    },
  });

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
      <h2>Step 2: Address Details</h2>
      <label htmlFor="address">Address:</label>
      <input
        className="s_input"
        type="text"
        name="address"
        id="address"
        onChange={formik.handleChange}
        value={formik.values.address}
      />
      {formik.touched.address && formik.errors.address ? (
        <div className="erroryup">{formik.errors.address}</div>
      ) : null}
      <br />

      <label htmlFor="district">District:</label> 
      <input
        className="s_input"
        type="text"
        name="district"
        id="district"
        onChange={formik.handleChange}
        value={formik.values.district}
      />
      {formik.touched.district && formik.errors.district ? (
        <div className="erroryup">{formik.errors.district}</div>
      ) : null}
      <br />

      <label htmlFor="state">State:</label>
      <input
        className="s_input"
        type="text"
        name="state"
        id="state"
        onChange={formik.handleChange}
        value={formik.values.state}
      />
      {formik.touched.state && formik.errors.state ? (
        <div className="erroryup">{formik.errors.state}</div>
      ) : null}
      <br />

      <label htmlFor="pincode">Pin Code:</label>
          <input
          className="s_input"
            type="number"
            name="pincode"
            id="pincode"
            onChange={formik.handleChange}
            value={formik.values.pincode}
          />
          {formik.touched.pincode && formik.errors.pincode ? (
         <div className="erroryup">{formik.errors.pincode}</div>
       ) : null}
          <br />
          
      <button onClick={prevStep}>Back</button> &nbsp; &nbsp;
      <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Form2;
