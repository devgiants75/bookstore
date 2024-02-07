import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

interface IProp {
  label: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const StyledInput = styled(TextField)`
  & label {
    position: static;
    font-size: 14rem;
  }

  & label[data-shrink='true'] {
    color: var(--gray100);
  }

  & label + input {
    margin-top: 4rem;
  }

  & input {
    border: 1px solid var(--gray50);
    height: 48rem;
    font-size: 16rem;
    padding: 8rem 12rem;
    border-radius: 6rem;
    margin: 4rem 0 0;
  }

  & input:focus {
    border-color: var(--gray80);
  }
`;

function Input({ label, type, onChange }: IProp) {
  return (
    <StyledInput
      label={label}
      type={type}
      variant="standard"
      onChange={onChange}
      InputLabelProps={{ shrink: true }}
    />
  );
}

export default Input;
