import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative; 
`;

const Label = styled.label``;

Label.Text = styled.span`
  font-size: 27px;
  position: absolute; 
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 1;

  color: var(--grayMedium);
  transition: .1s ease-in-out;
`;

const Input = styled.label`
  width: 100%;
  display: block;
  background: #53585D;
  color: #F5F5F5;
  font-size: 18px;
  height: 57px;
  padding-left: 16px;
  padding-right: 16px;
  outline: 0;
  border: 0;
  margin-bottom: 45px;
  overflow: hidden;
  border-radius: 4px;
  border-top: 4px solid transparent;
  border-bottom: 4px solid;
  border-bottom-color: #53585D;
  transition: border-color .3s;
  ${({ isInvalid }) => isInvalid && `
    border-bottom-color: #E53935;
  `}

  :focus {
    border-bottom-color: var(--primary);
  }

  :focus + span {
    font-size: 12px;
    transform: translateY(-100%);
  }
`;

function FormField({
  label,
  type,
  name,
  value,
  onChange,
}) {
  const tag = type === 'textarea' ? 'textarea' : 'input';
  const fieldId = name;
  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['textarea', 'text', 'color']),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
