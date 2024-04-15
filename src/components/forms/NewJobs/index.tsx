import { Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useState } from 'react'
import './index.css'
import { DatePicker } from '@mui/x-date-pickers';

function NewJob() {
    const [name, setName] = useState()
    const [cpf, setCpf] = useState()
    const [contact, setContact] = useState()
    const [deviceSerial, setDeviceSerial] = useState();
    const [deviceBrand, setDeviceBrand] = useState();
    const [deviceModel, setDeviceModel] = useState();
    const [typeJob, setTypeJob] = useState();
    const [description, setDesctiption] = useState();
    const [entry, setEntry] = useState(new Date())<Date>;


    return (
        <Box component="form" className='form-container'
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <div className='input-container form-client'>
                <TextField label="Nome" variant="outlined" value={name}
                    helperText="Buscar cliente" />
                <TextField label="CPF" variant="outlined" value={cpf} />
                <TextField label="Contato" variant="outlined" value={contact} />

            </div>
            <div className="input-container form-device">
                <TextField label="Serial" variant="outlined" value={deviceSerial}
                    helperText="Buscar equipamento" />
                <TextField label="Marca" variant="outlined" value={deviceBrand} />
                <TextField label="Modelo" variant="outlined" value={deviceModel} />
            </div>
            <div className="form-side">
                <div className="input-container ">
                    <RadioGroup defaultValue="Orçamento">
                        <FormControlLabel value="Orçamento" control={<Radio />} label="Orçamento" />
                        <FormControlLabel value="Serviço" control={<Radio />} label="Serviço" />
                        <FormControlLabel value="Garantia" control={<Radio />} label="Garantia" />
                        <FormControlLabel value="Retorno" control={<Radio />} label="Retorno" />
                    </RadioGroup>
                </div>
                <div className="input-container ">
                    <RadioGroup defaultValue="Status">
                        <FormControlLabel value="Iniciando" control={<Radio />} label="Orçamento" />
                        <FormControlLabel value="Aguardando" control={<Radio />} label="Garantia" />
                        <FormControlLabel value="Aprovado" control={<Radio />} label="Retorno" />
                        <FormControlLabel value="Finalizado" control={<Radio />} label="Serviço" />
                    </RadioGroup>
                </div>
            </div>
            <div className="input-container form-job">

                {/* <DatePicker/> */}

            </div>

        </Box>
    )
}

export default NewJob;