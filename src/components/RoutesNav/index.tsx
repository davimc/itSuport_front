import { BsPerson, BsGear } from "react-icons/bs"
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import './styles.css'
import { useState } from "react";

const icons = new Map<string, [any,any,any]>()

icons.set('job', [<BsGear/>, 'Serviço', 'jobs'])
icons.set('client', [<BsPerson/>, 'Cliente', 'users'])

function RoutesNav() {
    const [open, setOpen] = useState(true)
    const [classActive, setClassActive] = useState('client');
        return(
            <div className="navigation">
            <Drawer 
            sx={{
          width: 240,
          flexShrink: 1,

          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
            <List>
                {Array.from(icons).map(([key,val]) => {
                    return(
                    <Link to={val[2]} >
                    <ListItem className={(classActive == key? 'list active': 'list') } id={key} key = {key} onClick={() => setClassActive(key)}>
                            <ListItemIcon className="icon" >
                                {val[0]}
                            </ListItemIcon>
                            <ListItemText className="text" primary={val[1]}/>
                    </ListItem>
                    </Link>
                    )
                })}
                </List>
                <div className="indicator"></div>
            </Drawer>
        </div>
        )
    }
export default RoutesNav