import {     FormEvent, ReactNode,  } from "react";

interface entries {
    children: ReactNode,
    handleSubmit: (event:FormEvent<HTMLFormElement>) => void,
}

export default function Form(props:entries) {
    return(        
        <form className="form-container" onSubmit={props.handleSubmit}>
            {props.children}
        </form>
    )
}