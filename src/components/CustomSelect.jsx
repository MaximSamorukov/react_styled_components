import React from 'react'
import styled from 'styled-components';
import Select from 'react-select';

const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-bg)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radii)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
      marginTop: '30px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: state.isFocused ? 'var(--colors-text)' : 'var(--colors-text)',
      backgroundColor: state.isFocused ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--colors-input)',
    }),
  }
})``;

export default CustomSelect