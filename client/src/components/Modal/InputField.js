import { useState } from 'react';

const InputField = ({ field }) => {
  const [value, setValue] = useState(field.value || '');

  const inputProps = {
    className: "fields-modal__input",
    name: field.name,
    placeholder: field.placeholder,
    required: field.required,
    value: value,
    onChange: (e) => setValue(e.target.value),
  };

  return field.type === 'textarea' ? (
    <textarea {...inputProps} />
  ) : (
    <input type={field.type} {...inputProps} />
  );
};

export default InputField;
