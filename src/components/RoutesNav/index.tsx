import { BsPerson, BsGear } from "react-icons/bs"
import { Link } from "react-router-dom";
import './styles.css'
import { useState } from "react";

const icons = new Map<string, [any,any,any]>()

icons.set('job', [<BsGear/>, 'Serviço', 'jobs'])
icons.set('client', [<BsPerson/>, 'Cliente', 'users'])

function RoutesNav() {
    //será jobs
    const [classActive, setClassActive] = useState('client');
    return (
        <aside className="navigation">
            <ul>
                {Array.from(icons).map(([key,val]) => {
                    return(
                        <li className={classActive == key? 'list active':'list'} id={key} onClick={() => setClassActive(key)}>
                            <Link to={val[2]}>
                                <span className="icon">
                                    {val[0]}
                                </span>
                                <span className="text">{val[1]}</span>
                            </Link>
                        </li>

                    )
                })}
                <div className="indicator"></div>
            </ul>
        </aside>
    )
}
export default RoutesNav