import { useState } from 'react'

function NewJob() {
    const [name, setName] = useState()
    const [deviceSerial, setDeviceSerial] = useState();
    const [deviceBrand, setDeviceBrand] = useState();
    const [deviceModel, setDeviceModel] = useState();
    const [typeJob, setTypeJob] = useState();
    const [description, setDesctiption] = useState();
    const [entry, setEntry] = useState(new Date())<Date>;
    

    return (
        <div>
            <form>
                <label htmlFor="">Cliente</label>
                <input type="text" value={entry } />
            </form>
        </div>
    )
}

export default NewJob;