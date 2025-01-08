import { Form } from 'react-bootstrap';

export const InputField = ({ label, name, type, placeholder, value, onChange, error }) => (
    <Form.Group controlId={`formBasic${name}`} className='mb-2'>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <Form.Text className="text-danger">{error}</Form.Text>}
    </Form.Group>
  );
