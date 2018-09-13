import React from 'react';

const StudentDetails = props => (
  <div>
    <div>First Name: {props.student.firstName}</div>
    <div>Last Name: {props.student.lastName}</div>
    <div>Email: {props.student.email}</div>
  </div>
);

export default StudentDetails;
