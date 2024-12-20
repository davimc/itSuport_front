import { Button, Card, CardHeader, Checkbox, FormControlLabel, Radio, RadioGroup, Select, SelectChangeEvent, TextField, Tooltip } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import { FormEvent, useEffect, useMemo, useState } from 'react';

import { DatePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import { UserInfos, UserShort } from '../../../../models/Client';
import { NewJob } from '../../../../models/Job';
import { BASE_URL } from '../../../../utils/request';
import Form from "../Form";
import './../styles.css';
import SelectField from '../../../SelectField';
import DeviceShort from '../../../../models/Device';




function FormJob() {
    const [clientId, setClientId] = useState<String>('')
    const [clientList, setClientList] = useState<UserShort[]>([])
    const [techId, setTechId] = useState<String>('')
    const [techList, setTechList] = useState<UserShort[]>([])
    const [deviceId, setDeviceId] = useState<String>('')
    const [deviceList, setDeviceList] = useState<DeviceShort[]>([])
 
    const searchUsers = useEffect(() => {
        axios.get(`${BASE_URL}/users/typified`)
            .then(function (response) {

                let clients: UserShort[] = []
                let techs: UserShort[] = []

                response.data.content.map(element => {

                    //todo resolver: gambiarra confiando que só vai ter um perfil e apenas dois perfis
                    element.type[0] == 'ROLE_COSTUMER' ? clients.push(element) : techs.push(element)
                });
                setClientList(clients)
                setTechList(techs)
            })
            .catch(function (error) { console.log(error) })

    }, [])
    const searchDevices = useEffect(() => {
        if ( clientId !== '') {
            axios.get(`${BASE_URL}/devices/owner/${clientId}`)
                .then((response) => console.log(response))
                .catch((error) => console.log('error:', error))
            }
        }, [clientId])
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const newJob: NewJob = {
            entry: '',
            clientName: '',
            techName: '',
            deviceId: '',
            deviceObs: '',
            jobType: '',
        }
        for (let [key, value] of formData.entries()) {
            if (key === 'entry' && value) {
                newJob['entry'] = new Date(value.toString()).toISOString().split('T')[0];
            } else if (key in newJob) {
                newJob[key as keyof NewJob] = value.toString();
            }
        }
        axios.post(`${BASE_URL}/jobs/`, newJob)
            .then(function (response) { console.log(response) })
            .catch(function (error) { console.log(error) })
    }
    const handleChange = (event: SelectChangeEvent<UserInfos>, setInfo: Function) => {
        const {
            target: { value },
        } = event;

        setInfo(
            // On autofill we get a stringified value.
            value
        );
    };
    return (
        <Form handleSubmit={handleSubmit} >
            <div className="field-container">
                <div className="">
                    <h2>Informações</h2>
                    <div className='input-container'>

                        <SelectField
                            handleChange={handleChange} setInfos={setClientId}
                            valueList={clientList}
                        />
                        {/* <SelectField
                            handleChange={handleChange} setInfos={setDeviceId}
                            valueList={deviceList} /> */}
                        <SelectField handleChange={handleChange} setInfos={setTechId}
                            valueList={techList} />
                    </div>
                </div>

                <div className='lateral-form-container'>

                    <div className="date-container">
                        <div className='input-container'>
                            <h3>Datas</h3>
                            <DatePicker className="date-input input" label="Entrada" format='DD/MM/YYYY' name="entry" />
                            <DatePicker className="date-input input" label="Autorização" />
                            <DatePicker className="data-input input" label="Finalização" />
                        </div>
                        <div className="input-container ">

                            <RadioGroup defaultValue="Orçamento" name='jobType'>
                                <h3>Tipo</h3>
                                <FormControlLabel value="Orçamento" control={<Radio />} label="Orçamento" />
                                <FormControlLabel value="Serviço" control={<Radio />} label="Serviço" />
                                <FormControlLabel value="Garantia" control={<Radio />} label="Garantia" />
                                <FormControlLabel value="Retorno" control={<Radio />} label="Retorno" />
                            </RadioGroup>
                        </div>


                    </div>
                </div>
            </div>
            <Button>ok</Button>

        </Form >
    )
}

export default FormJob;