import React, { useContext, useState } from 'react';
import styled from 'styled-components';
// Store
import { StoreContext, actionTypes } from '../../store';

export const SearchBar = () => {
  const [, dispatch] = useContext(StoreContext);
  // Input value
  const [value, setValue] = useState('');
  const changeValue = e => setValue(e.target.value);
  // On submit
  const submit = e => {
    e.preventDefault();
    if (value) {
      dispatch({ type: actionTypes.UPDATE_CITY, payload: value });
      setValue('');
    }
  };

  return (
    <StyledForm onSubmit={submit}>
      <StyledLabel htmlFor='searchInput'>
        <StyledInput
          id='searchInput'
          placeholder='Type city to change forecast'
          type='text'
          value={value}
          onChange={changeValue}
        />
      </StyledLabel>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 35rem;
  @media screen and (max-width: 450px) {
    width: 22rem;
  }
`;
const StyledLabel = styled.label`
  display: block;
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  border-bottom: 2px solid ${({ theme: { color } }) => color.primary};
  padding: 0.2rem 0.4rem;
  background-color: transparent;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  color: ${({ theme: { color } }) => color.primary};
  height: 3.4rem;
`;
