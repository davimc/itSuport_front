import { Box } from '@mui/material';

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