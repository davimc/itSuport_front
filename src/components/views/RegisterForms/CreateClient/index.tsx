import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { FormEvent } from "react"
import { newClient } from '../../../../models/Client'
import Form from "../Form"
import { Dayjs } from "dayjs"

import './styles.css'


export default function FormClient() {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        let client: newClient = {name:'',document:'',type:'',
            cep:'',street:'',district:'',
            city:'',state:'',tel:'',email:'',
            birthdate: null
        };
        client['name'] = 'Davi'
        for (let [key, value] of formData.entries()) {
            if (key === 'birthdate' && value) {
                client.birthdate = new Dayjs(value.toString());
            } else if (key in client) {
                client[key as keyof newClient] = value.toString();
            }
        }
        console.log(client)

    }
    //todo transformar input cep em component  INIT
    const NumberOnlyRegex = /^[0-9]*$/;
    const LetterContainRegEx = /[a-zA-z]/;
    const ZIP_CODE_LENGTH = 5;

    //TODO END
    return (
            <Form handleSubmit={handleSubmit}>
                <div>
                    <h2>Informações</h2>
                    <div className='input-container'>
                        <TextField label="Nome" className='main-input input' variant="outlined" name="name" />
                        <DatePicker className="date-input input" label="Nascimento" format='DD/MM/YYYY' name="nascimento" />

                    </div>

                    <div className="input-container">
                        <h3>Cadastro contato</h3>
                        <TextField label="CEP" name="cep" type="number" className="main-input input cep" variant="outlined" />
                        <TextField label="Rua" name="street" className="main-input input" variant="outlined" />
                        <TextField label="Número" name="number" className="main-input input" variant="outlined" />
                        <TextField label="Bairro" name="district" className="input" variant="outlined" />
                        <TextField label="Cidade" name="city" className='input' variant="outlined" />
                        <TextField label="Estado" name="state" className='input' variant="outlined" />
                    </div>
                    <div className="input-container">
                        <TextField className="main-input input" label="Email" name="email" type="email" variant="outlined" />
                        <TextField className="main-input input" label="Telefone" name="tel" type="tel" variant="outlined" />
                    </div>
                </div>

                <div className='lateral-form-container'>

                    <div className="date-container">
                        <div className="input-container ">
                            <h3>Tipo</h3>
                            <RadioGroup defaultValue="fisica" name="type">
                                <FormControlLabel value="fisica" control={<Radio />} label="Física" />
                                <FormControlLabel value="juridica" control={<Radio />} label="Jurídica" />
                            </RadioGroup>
                            <TextField label="Documento" name="document" type="number" className="main-input input" variant="outlined" />

                        </div>

                    </div>
                </div>
                <Button type="submit">ok</Button>
            </Form>
    )
}