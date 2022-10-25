import React from 'react'
import { Controller } from "react-hook-form";

import {InputContainer, ErrorMessage, IconContainer } from './styles';
import { IInputProps } from './types';

const Input = ({leftIcon, name, control, errorMessage, ...rest}: IInputProps) => {


  return (
    <>
      <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <input
                {...rest}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
              />
            )}
          />
      </InputContainer>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  )
}

export { Input }; 
