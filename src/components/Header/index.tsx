import {  Toolbar } from '@mui/material';
import AppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from '@emotion/react';
import './index.css'


function Header() {
    const theme = useTheme();
    return(
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

    
}export default Header;