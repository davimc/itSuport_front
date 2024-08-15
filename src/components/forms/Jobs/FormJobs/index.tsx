import { Button, FormControlLabel, Radio, RadioGroup, TextareaAutosize, TextField } from '@mui/material';
import { useState } from 'react'
import './styles.css'
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { NewJob } from '../../../../models/Job';



function FormJob() {

    // const handlinButton = ():NewJob =>{
    //     return (
    //         {
    //             type: typeJob,
    //             deviceBrand: deviceBrand,

    //         }
    //     )
    // }
    const [name, setName] = useState<string>("")
    const [deviceType, setDeviceType] = useState<string>("")
    const [deviceSerial, setDeviceSerial] = useState<string>("");
    const [deviceBrand, setDeviceBrand] = useState<string>("");
    const [deviceModel, setDeviceModel] = useState<string>("");
    const [deviceObs, setDeviceObs] = useState<string>("");
    const [typeJob, setTypeJob] = useState<string>("");
    const [entry, setEntry] = useState<Dayjs>(dayjs(new Date()));

    return (
        <div className='form-container'>
            <div className="main-form-container">
                <h2>Informações</h2>
                <h3>Cliente</h3>
                <div className='input-container'>
                    <TextField label="Nome" className='main-input input' variant="outlined" value={name}/>

                </div>
                <div className="input-container">
                    <h3>Dispositivo</h3>
                    <TextField label="Tipo" className="main-input input" variant="outlined" value={deviceType}/>
                    <TextField label="Serial" className="input" variant="outlined" value={deviceSerial}/>
                    <TextField label="Marca" className='input' variant="outlined" value={deviceBrand} />
                    <TextField label="Modelo" className='input' variant="outlined" value={deviceModel} />
                    <TextareaAutosize placeholder='Observações' className='input' variant="outlined" value={deviceObs} />
                </div>
            </div>

            <div className='lateral-form-container'>
                    
                <div className="date-container">
                    <div className='input-container'>
                    <h3>Datas</h3>
                        <DatePicker className="date-input input" label="Entrada"
                            value={entry}
                        />
                        <DatePicker className="date-input input" label="Autorização" sx={{}} />
                        <DatePicker className="data-input input" label="Finalização" />
                    </div>
                    <div className="input-container ">
                        <h3>Tipo</h3>
                        <RadioGroup defaultValue="Orçamento">
                            <FormControlLabel value="Orçamento" control={<Radio />} label="Orçamento" />
                            <FormControlLabel value="Serviço" control={<Radio />} label="Serviço" />
                            <FormControlLabel value="Garantia" control={<Radio />} label="Garantia" />
                            <FormControlLabel value="Retorno" control={<Radio />} label="Retorno" />
                        </RadioGroup>
                    </div>
                    <div className="input-container ">
                        <h3>Status</h3>
                        <RadioGroup onChange={() => set}>
                            <FormControlLabel control={<Radio />} label="Iniciando" />
                            <FormControlLabel control={<Radio />} label="Aguardando" />
                            <FormControlLabel control={<Radio />} label="Aprovado" />
                            <FormControlLabel control={<Radio />} label="Finalizado" />
                        </RadioGroup>
                    </div>
                </div>
            </div>
            {/* <Button onClick={haddlinButton}>ok</Button> */}

        </div >
    )
}

export default FormJob;