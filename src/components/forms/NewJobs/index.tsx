import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useState } from 'react'
import './styles.css'
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import Form from '..';

function NewJob() {
    const [name, setName] = useState()
    const [cpf, setCpf] = useState()
    const [deviceSerial, setDeviceSerial] = useState();
    const [deviceBrand, setDeviceBrand] = useState();
    const [deviceModel, setDeviceModel] = useState();
    const [typeJob, setTypeJob] = useState();
    const [description, setDesctiption] = useState();
    const [entry, setEntry] = useState<Dayjs>();

    return (
        <>

            <Form title="Serviço">
                <div className='input-container form-client'>
                    <TextField label="Nome" className='main-input' sx={{ width: 1 }} variant="outlined" value={name}
                        helperText="Buscar cliente" />
                    <TextField label="CPF" variant="outlined" value={cpf} />

                </div>
                <div className="input-container form-device">
                    <TextField label="Serial" className="main-input" variant="outlined" value={deviceSerial}
                        helperText="Buscar equipamento" />
                    <TextField label="Marca" variant="outlined" value={deviceBrand} />
                    <TextField label="Modelo" variant="outlined" value={deviceModel} />
                </div>
                <div className="form-side">
                    <div>
                        <DatePicker className="job-entry" label="Entrada"
                            value={entry}
                            />
                        <DatePicker className="job-authorization" label="Autorização" sx={{}} />
                        <DatePicker className="job-completion" label="Finalização" />
                    </div>
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

                </div>

            </Form>
        </>
    )
}

export default NewJob;