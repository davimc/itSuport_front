import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIconTypeMap } from "@mui/material";
import Handyman from '@mui/icons-material/Handyman';
import PersonIcon from '@mui/icons-material/Person';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { SvgIconComponent } from "@mui/icons-material";




interface Props {
    open: boolean,
    toggleDrawer: Function
}
type ItemProps = {
    icon: SvgIconComponent
    desc: string
}

const listItens: ItemProps[] = [
    { icon: PersonIcon, desc: 'Cliente' },
    { icon: Handyman, desc: 'Serviços' },
    { icon: EngineeringIcon, desc: 'Técnico'}
]

export default function NavRouter(props: Props) {


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={props.toggleDrawer(false)}>
            <List>
                {listItens.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <item.icon />
                            </ListItemIcon>
                            <ListItemText primary={item.desc} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );
    return (
        <div>
            {DrawerList}

        </div>
    )
}