import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function BasicDatePicker( props ) {

  const { name, value, onChange } = props;

  return (
    <LocalizationProvider  dateAdapter={AdapterDateFns}>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        name={name}
        label="Fecha de nacimiento"
        value={value}
        onChange={newValue => onChange(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
