import { createContext, useContext, useState } from "react";
import MultiStepForm from "./MultiForm";
import axios from "axios";


export const FormContext = createContext(null);

export default function MyApp() {
  const [step, setStep] = useState(1);
  const [refresh, setRefresh] = useState(0);
  const [apiData, setApiData] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    district: "",
    state: "",
    pincode: "",
    school: "",
    board: "",
    rollnumber: "",
    age: "",
    father: "",
    mother: "",
  });


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const getData = () => {
    axios
      .get("http://localhost:5000/users")
      .then(function (response) {
        console.log(response);
        setApiData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  };

  const handleChange = (value) => {
    setFormData({ ...formData,  ...value});
  };

  const handleSubmit = (value) => {
    setFormData({ ...formData,  ...value});
    console.log(JSON.stringify(formData));
    axios
    .post("http://localhost:5000/users", {...formData, ...value})
    .then(function (response) {
      getData()
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
  };


  return (
    <FormContext.Provider value={{step, formData, setFormData, nextStep,prevStep , handleChange, handleSubmit, refresh, apiData }}>
      <MultiStepForm />
    </FormContext.Provider>
  )
}