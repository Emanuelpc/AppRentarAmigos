import React from 'react';
import Form from 'react-bootstrap/Form';
const Checkbox = ({ label, checked, onChange }) => {
    return (
      <Form.Check
        type="checkbox"
        label={label}
        checked={checked}
        onChange={onChange}
      />
    );
  };
  
  export default Checkbox;
  