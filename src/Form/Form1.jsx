import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form1({ nextStep, handleChange , values}) {
  const yupValidate = Yup.object().shape({
    name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .matches(/^[a-zA-Z'-\s]*$/, 'Invalid name')
    .required("Required"),
    email: Yup.string()
    .email("Invalid email")
    .required("Required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email format'),
    phone: Yup.string()
      .min(10, "Check Number")
      .max(11, "Invalid Number")
      .required("Phone Required")
  });

  const formik = useFormik({
    initialValues: {
      name: values.name || "",
      email: values.email || "",
      phone: values.phone || "",
    },
    validationSchema: yupValidate,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log(values);
      handleChange(values)
      nextStep()
    },
    
  });
  
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Step 1: Basic Details</h2>
      <label htmlFor="name">Name</label> 
      <input
        id="name"
        name="name"
        type="text"
        className="s_input"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="erroryup">{formik.errors.name}</div>
      ) : null}
      <br />

      <label htmlFor="email">Email Address</label> 
      <input
        id="email"
        name="email"
        type="email"
        className="s_input"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="erroryup">{formik.errors.email}</div>
      ) : null}
      <br />

      <label htmlFor="phone">Phone:</label> 
      <input
        className="s_input"
        type="tel"
        name="phone"
        id="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <div className="erroryup">{formik.errors.phone}</div>
      ) : null}

      <br />
      <button type="submit" >Next</button>
      
    </form>
  );
}
