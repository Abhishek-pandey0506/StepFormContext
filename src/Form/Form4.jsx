import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { ModalBody } from "react-bootstrap";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Form4 = ({
  nextStep,
  prevStep,
  handleSubmit,
  values,
  formData,
  setFormData,
  apiData,
}) => {
  // const [newData, setNewData] = useState();
  const [refresh, setRefresh] = useState();

  // Model bootstrape
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getData();
  }, [refresh]);

  const getData = () => {
    axios
      .get("http://localhost:5000/users")
      .then(function (response) {
        console.log(response);
        setFormData(response.data);
        setRefresh(!refresh);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  const yupValidate = Yup.object().shape({
    age: Yup.number()
      .required("Age Required")
      .min(18, "age limit 18+")
      .max(99, "max age 100"),
    father: Yup.string()
      .min(2, "Too Short!")
      .required("Required")
      .matches(/^[a-zA-Z'-\s]*$/, "Invalid name"),
    mother: Yup.string()
      .min(2, "Too Short!")
      .required("Required")
      .matches(/^[a-zA-Z'-\s]*$/, "Invalid name"),
  });

  const formik = useFormik({
    initialValues: {
      age: values.age || "",
      father: values.father || "",
      mother: values.mother || "",
    },
    validationSchema: yupValidate,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
      console.log(JSON.stringify(values));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Step 4: Personal Details</h2>
        <label htmlFor="age">Age:</label>
        <input
          className="s_input"
          type="number"
          name="age"
          id="age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (
          <div className="erroryup">{formik.errors.age}</div>
        ) : null}
        <br />

        <label htmlFor="father">Father Name:</label>
        <input
          className="s_input"
          type="text"
          name="father"
          id="father"
          onChange={formik.handleChange}
          value={formik.values.father}
        />
        {formik.touched.father && formik.errors.father ? (
          <div className="erroryup">{formik.errors.father}</div>
        ) : null}
        <br />

        <label htmlFor="mother">Mother Name :</label>
        <input
          className="s_input"
          type="text"
          name="mother"
          id="mother"
          onChange={formik.handleChange}
          value={formik.values.mother}
        />
        {formik.touched.mother && formik.errors.mother ? (
          <div className="erroryup">{formik.errors.mother}</div>
        ) : null}
        <br />

        <button onClick={prevStep}>Back</button> &nbsp; &nbsp;
        <button type="submit">Submit</button> &nbsp; &nbsp;
        <button onClick={nextStep}>Print</button> &nbsp; &nbsp;
      </form>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Mother Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apiData &&
              apiData.map((value, index) => {
                return (
                  <TableRow>
                    <TableCell>{value?.name}</TableCell>
                    <TableCell>{value?.email}</TableCell>
                    <TableCell>{value?.phone}</TableCell>
                    <TableCell>{value?.age}</TableCell>
                    <TableCell>{value?.father}</TableCell>
                    <TableCell>{value?.mother}</TableCell>
                    <TableCell>

                      <Button variant="primary" onClick={handleShow}>
                        <InfoIcon fontSize="small" />
                      </Button>
                      
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>
                            <strong>Address : </strong> {values?.address}
                          </p>
                          <p>
                            <strong>District : </strong> {values?.district}
                          </p>
                          <p>
                            <strong>State : </strong> {values?.state}
                          </p>
                          <p>
                            <strong>Pin Code : </strong> {values?.pincode}
                          </p>
                          <p>
                            <strong>School/College : </strong> {values?.school}
                          </p>
                          <p>
                            <strong>Board : </strong> {values?.board}
                          </p>
                          <p>
                            <strong>Roll Number : </strong> {values?.rollnumber}
                          </p>
                        </Modal.Body>
                        {/* <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer> */}
                      </Modal>
    </div>
  );
};

export default Form4;
