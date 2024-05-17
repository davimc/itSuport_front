import { Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

interface fieldProps {
    title:string;
    children: JSX.Element[]
}

function Form(props:fieldProps) {
    return (
        <>
        
        <h2>{props.title}</h2>

        <Box component="form" className='form-container'
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            {props.children}
        </Box>
        </> 
    )
}

export default Form;