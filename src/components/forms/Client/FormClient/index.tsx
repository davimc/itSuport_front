import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { useState, ChangeEvent, MouseEvent, FormEvent } from "react"


export default function FormClient() {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        console.log(formData.entries())
        for (let [key, value] of formData.entries()) {
            console.log(key, value)
        }
    }
    //todo transformar input cep em component  INIT
    const NumberOnlyRegex = /^[0-9]*$/;
    const LetterContainRegEx = /[a-zA-z]/;
    const ZIP_CODE_LENGTH = 5;

    //TODO END
    return (
        <div className='form-container'>
            <form className="form-container" onSubmit={handleSubmit}>
                <div>
                    <h2>Informações</h2>
                    <div className='input-container'>
                        <TextField label="Nome" className='main-input input' variant="outlined" name="name" />

                    </div>

                    <div className="input-container">
                        <h3>Informações do cliente e contato</h3>
                        <TextField label="CEP" name="cep" type="number" className="main-input input" variant="outlined" />
                        <TextField label="Rua" name="rua" className="main-input input" variant="outlined" />
                        <TextField label="Número" name="numero" className="main-input input" variant="outlined" />
                        <TextField label="Bairro" name="bairro" className="input" variant="outlined" />
                        <TextField label="Cidade" name="cidade" className='input' variant="outlined" />
                        <TextField label="Estado" name="estado" className='input' variant="outlined"/>
                    </div>
                </div>

                <div className='lateral-form-container'>

                    <div className="date-container">
                        <div className='input-container'>
                            <h3>Datas</h3>
                            <DatePicker className="date-input input" label="Nascimento" format='DD/MM/YYYY' name="nascimento"/>
                        </div>
                        <div className="input-container ">
                            <h3>Tipo</h3>
                            <RadioGroup defaultValue="fisica" name="tipo">
                                <FormControlLabel value="fisica" control={<Radio />} label="Física" />
                                <FormControlLabel value="juridica" control={<Radio />} label="Jurídica" />
                            </RadioGroup>
                            <TextField label="Documento" name="documento" type="number" className="main-input input" variant="outlined" />

                        </div>

                    </div>
                </div>
                <Button type="submit">ok</Button>
            </form>

        </div >
    )
}