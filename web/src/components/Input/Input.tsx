import React from 'react';
import { StyledInput } from './Index.Style';

interface IProp {
  label: string;
  type: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string | boolean;
  required?: boolean;
}

function Input({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  helperText,
  required,
}: IProp) {
  return (
    <StyledInput
      label={label}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      variant="standard"
      onChange={onChange}
      InputLabelProps={{ shrink: true }}
      error={error}
      helperText={helperText}
      required={required}
    />
  );
}

export default Input;
