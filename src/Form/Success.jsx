
import React from 'react';

const Confirmation = ({ prevStep, values, formData, setFormData,handleSubmit }) => {
  const handlePrint = () => {
    window.print()
  }
  return (
    <div className='container'>
      <h2>Form Submitted successfully</h2>
      <br />
      <br />
        <p><strong>Name : </strong> {values.name}</p>
        <p><strong>Email : </strong> {values.email}</p>
        <p><strong>Phone : </strong> {values.phone}</p>
        <p><strong>Address : </strong> {values.address}</p>
        <p><strong>District : </strong> {values.district}</p>
        <p><strong>State : </strong> {values.state}</p>
        <p><strong>Pin Code : </strong> {values.pincode}</p>
        <p><strong>School/College : </strong> {values.school}</p>
        <p><strong>Board : </strong> {values.board}</p>
        <p><strong>Roll Number : </strong> {values.rollnumber}</p>
        <p><strong>Age : </strong> {values.age}</p>
        <p><strong>Father Name : </strong> {values.father}</p>
        <p><strong>Mother Name : </strong> {values.mother}</p>
        
      <button onClick={prevStep}>Back</button> &nbsp; &nbsp;
      <button type="submit" onClick={handlePrint}>Print</button>
    </div>
  );
};

export default Confirmation;