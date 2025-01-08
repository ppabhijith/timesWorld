import { Form } from "react-bootstrap";

export const CheckboxField = ({ label, name, checked, onChange }) => (
  <Form.Group controlId={`formBasic${name}`} className='mb-2'>
    <Form.Check
      type="checkbox"
      name={name}
      label={label}
      checked={checked}
      onChange={onChange}
    />
  </Form.Group>
);
