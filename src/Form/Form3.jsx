import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const Form3 = ({ nextStep, prevStep, handleChange, values }) => {
  const yupValidate = Yup.object().shape({
    school: Yup.string()
    .required(" Required")
    .matches(/^[a-zA-Z'-\s]*$/, 'Invalid name'),
    board: Yup.string()
    .required("Required")
    .matches(/^[a-zA-Z'-\s]*$/, 'Invalid name'),
    rollnumber: Yup.string()
    .min(6, "Check Roll Number")
    .max(10, "Invalid Roll Number")
    .required("Roll Number Required"),
  });

  const formik = useFormik({
    initialValues: {
        school: values.school || "",
        board: values.board || "",
        rollnumber: values.rollnumber || "",
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
      <h2>Step 3: Educational Details </h2>
      <label htmlFor="school">School / College:</label>
      <input
        className="s_input"
        type="text"
        name="school"
        id="school"
        onChange={formik.handleChange}
        value={formik.values.school}
      />
      {formik.touched.school && formik.errors.school ? (
        <div className="erroryup">{formik.errors.school}</div>
      ) : null}
      <br />

      <label htmlFor="board">Board:</label>
      <input
        className="s_input"
        type="text"
        name="board"
        id="board"
        onChange={formik.handleChange}
        value={formik.values.board}
      />
      {formik.touched.board && formik.errors.board ? (
        <div className="erroryup">{formik.errors.board}</div>
      ) : null}
      <br />


      <label htmlFor="rollnumber">Roll Number:</label>
          <input
          className="s_input"
            type="number"
            name="rollnumber"
            id="rollnumber"
            onChange={formik.handleChange}
            value={formik.values.rollnumber}
          />
          {formik.touched.rollnumber && formik.errors.rollnumber ? (
         <div className="erroryup">{formik.errors.rollnumber}</div>
       ) : null}
          <br />
          
      <button onClick={prevStep}>Back</button> &nbsp; &nbsp;
      <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Form3;
