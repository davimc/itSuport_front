import { BsPerson, BsGear } from "react-icons/bs"
import MenuIcon from '@mui/icons-material/Menu';
import { alpha, AppBar, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, styled, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//drawer elements used

import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import './styles.css'
import { useState } from "react";

const icons = new Map<string, [any, any, any]>()

icons.set('job', [<BsGear />, 'Serviço', 'jobs'])
icons.set('client', [<BsPerson />, 'Cliente', 'users'])

const StyledSearch = styled('div')(
    ({theme}) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    })  
  );
  
  const SearchIconWrapper = styled('div')(
    ({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(
    ({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
  //search as JSX
  const search = (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Suchen…" inputProps={{ 'aria-label': 'search' }} />
    </StyledSearch>
  )

function RoutesNav() {
    const [open, setOpen] = useState<boolean>(false)
    const [classActive, setClassActive] = useState('client');
    const toggleDrawer = (open:boolean) => (event:KeyboardEvent) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        //changes the function state according to the value of open
        setOpen(open);
      };
    return (
        <AppBar className="navigation" position="static">
            <Toolbar>

                {/* hamburger icon shows the drawer on click */}
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    //onClick={toggleDrawer(true)}
                    sx={{ mr: 2, display: { xs: 'block', sm: 'none', }, }}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    sx={{
                        width: 240,
                        flexShrink: 1,

                        '& .MuiDrawer-paper': {
                            width: 240,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="temporary"
                    anchor="left"
                    open={open}
                    onClose={toggleDrawer(false)} //function that is called when the drawer should close
          
                    onOpen={toggleDrawer(true)}>
                        
                    <List>
                        {Array.from(icons).map(([key, val]) => {
                            return (
                                <Link to={val[2]} key={key}>
                                    <ListItem className={(classActive == key ? 'list active' : 'list')} id={key} key={key} onClick={() => setClassActive(key)}>
                                        <ListItemIcon className="icon" >
                                            {val[0]}
                                        </ListItemIcon>
                                        <ListItemText className="text" primary={val[1]} />
                                    </ListItem>
                                </Link>
                            )
                        })}
                    </List>
                    <div className="indicator"></div>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}
export default RoutesNav