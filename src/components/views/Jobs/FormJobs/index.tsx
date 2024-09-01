import { Button, FormControlLabel, Radio, RadioGroup, TextareaAutosize, TextField } from '@mui/material';
import { useState, ChangeEvent, MouseEvent } from 'react'
import './styles.css'
import { DatePicker} from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { NewJob } from '../../../../models/Job';



function FormJob() {

    

    const handleChangeObs = (e: ChangeEvent<HTMLTextAreaElement>) => {setDeviceObs(e.currentTarget.value)}
    const handleName = (event: ChangeEvent<HTMLInputElement>) => {setName(event.target.value)}
    const handleDeviceType = (event: ChangeEvent<HTMLInputElement>) => {setDeviceType(event.target.value)}
    const handleDeviceSerial = (event: ChangeEvent<HTMLInputElement>) => {setDeviceSerial(event.target.value)}
    const handleDeviceBrand = (event: ChangeEvent<HTMLInputElement>) => {setDeviceBrand(event.target.value)}
    const handleDeviceModel = (event: ChangeEvent<HTMLInputElement>) => {setDeviceModel(event.target.value)}



    const [name, setName] = useState<string>("")
    const [deviceType, setDeviceType] = useState<string>("")
    const [deviceSerial, setDeviceSerial] = useState<string>("");
    const [deviceBrand, setDeviceBrand] = useState<string>("");
    const [deviceModel, setDeviceModel] = useState<string>("");
    const [deviceObs, setDeviceObs] = useState<string>("");
    const [typeJob, setTypeJob] = useState<string>("");
    //todo format dd-mm-yyyy
    const [entry, setEntry] = useState<Dayjs>(dayjs(new Date()));

    const handleSubmit = (e:MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        const newJob: NewJob = {
            entry,
            clientName:name,
            deviceType,
            deviceSerial,
            deviceBrand,
            deviceModel,
            deviceObs,
            typeJob,
        }

        alert("Nome: " + newJob.clientName +"\nData de entrada:" + newJob.entry.format("DD/MM/YYYY") + "\nInformações do Dispositivo\n\tTipo " + newJob.deviceType +
        "\n\tMarca: "+ newJob.deviceBrand + "\n\tSerial: " + newJob.deviceSerial + "\n\tObservações: " + newJob.deviceObs + "\nTipo de serviço: " + newJob.typeJob)
    }
    return (
        <div className='form-container'>
            <div className="main-form-container">
                <h2>Informações</h2>
                <h3>Cliente</h3>
                <div className='input-container'>
                    <TextField label="Nome" className='main-input input' variant="outlined" value={name} onChange={handleName} />

                </div>
                <div className="input-container">
                    <h3>Dispositivo</h3>
                    <TextField label="Tipo" className="main-input input" variant="outlined" value={deviceType} onChange={handleDeviceType}/>
                    <TextField label="Serial" className="input" variant="outlined" value={deviceSerial} onChange={handleDeviceSerial}/>
                    <TextField label="Marca" className='input' variant="outlined" value={deviceBrand} onChange={handleDeviceBrand}/>
                    <TextField label="Modelo" className='input' variant="outlined" value={deviceModel} onChange={handleDeviceModel} />
                    <TextareaAutosize placeholder='Observações' className='input' 
                    value={deviceObs} onChange={handleChangeObs} />
                </div>
            </div>

            <div className='lateral-form-container'>
                    
                <div className="date-container">
                    <div className='input-container'>
                    <h3>Datas</h3>
                        <DatePicker className="date-input input" label="Entrada" format='DD/MM/YYYY'
                            value={entry} onChange={(date) => setEntry(date? date: dayjs(new Date()))}
                        />
                        <DatePicker className="date-input input" label="Autorização"  />
                        <DatePicker className="data-input input" label="Finalização" />
                    </div>
                    <div className="input-container ">
                        <h3>Tipo</h3>
                        <RadioGroup defaultValue="Orçamento" onChange={() => {
                            setTypeJob
                            console.log(typeJob)
                        }}>
                            <FormControlLabel value="Orçamento" control={<Radio />} label="Orçamento" />
                            <FormControlLabel value="Serviço" control={<Radio />} label="Serviço" />
                            <FormControlLabel value="Garantia" control={<Radio />} label="Garantia" />
                            <FormControlLabel value="Retorno" control={<Radio />} label="Retorno" />
                        </RadioGroup>
                    </div>
                    {/* <div className="input-container ">
                        <h3>Status</h3>
                    <RadioGroup defaultValue="Iniciando">
                            <FormControlLabel control={<Radio />} value="Iniciando" label="Iniciando" />
                            <FormControlLabel control={<Radio />} value="Aguardando" label="Aguardando" />
                            <FormControlLabel control={<Radio />} value="Aprovado" label="Aprovado" />
                            <FormControlLabel control={<Radio />} value="Finalizado" label="Finalizado" />
                        </RadioGroup>
                    </div>
                    */}
                </div> 
            </div>
            <Button onClick={handleSubmit}>ok</Button>

        </div >
    )
}

export default FormJob;