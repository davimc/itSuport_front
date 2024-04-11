import { IconButton, Menu, Toolbar } from '@mui/material';
import './index.css'
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from '@emotion/react';


function Header() {
    const theme = useTheme();
    return(
        <AppBar>
            <Toolbar>
                
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}>
                      
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}>
                        Suport Informática
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )

    
}export default Header;