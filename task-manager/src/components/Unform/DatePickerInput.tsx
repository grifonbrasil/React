import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import { useField } from '@unform/core';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import ptBR from 'date-fns/locale/pt-BR';
import ErrorMessage from './ErrorMessage';
registerLocale('pt-BR', ptBR)

interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string;
  placeholder: string;
}

const DatePicker: React.FC<Props> = ({ name, placeholder, className, ...rest }) => {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(defaultValue || undefined);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref: any) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);
  

  return (
    <>
      <ReactDatePicker
        dateFormat="dd/MM/yyyy - HH:mm"
        locale={ptBR}
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        {...rest}
        className={`date-picker-custom ${className || ''}`}
        placeholderText={placeholder}
        showTimeSelect
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};
export default DatePicker;
