import { Toolbar } from '@mui/material';
import AppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useTheme } from '@emotion/react';

import NavRouter from '../routers/NavRouter'
import './index.css'
import { useRef} from 'react';


function Header() {
const open = useRef(false)
    
    const toggleDrawer = (newOpen: boolean) => () => {
        console.log(open)
        open.current = newOpen;
    };

    return (
        <AppBar className="header-container">
            <Toolbar>


                    
                
                <Typography variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}>
                    Suport Informática
                </Typography>

            </Toolbar>

        </AppBar>
    )


} export default Header;