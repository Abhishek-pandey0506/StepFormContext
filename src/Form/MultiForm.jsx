import React, { useContext, useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import { FormContext } from './Stepper';
import Confirmation from './Success';

const MultiStepForm = () => {
const { nextStep,prevStep, handleChange, formData, step, handleSubmit, apiData} = useContext(FormContext)


  switch (step) {
    case 1:
      return <Form1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <Form2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <Form3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 4:
      return <Form4 nextStep={nextStep} prevStep={prevStep} values={formData} handleSubmit={handleSubmit} apiData={apiData} />;
    case 5:
      return <Confirmation prevStep={prevStep} values={formData}/>;
    //   default:
    //   return <form1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
  
  }
};

export default MultiStepForm;