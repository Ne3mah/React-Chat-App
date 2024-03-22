import {Stack , Box, Switch, Divider, Avatar, IconButton} from '@mui/material';
import Logo from '../assets/images/logo.png';
import LogoDark from '../assets/images/logo-dark.png';
import Ava from '../assets/images/test_avatar.jpg';
import { NavBarIcons , SettingsIcon, themeIcons} from '../data/icons';
import { NavIcon } from './NavIcon';
import "./SideBar.css";
import { useState } from 'react';



export const SideBar = ({onThemeToggle , isDarkMode}) => {
  const [activeIcon, setActiveIcon] = useState(0);

    const HandleClickIcon = (index) =>{
      setActiveIcon(index)
    }

    const NavBarIconsList = NavBarIcons.map((icon, index)=>{
        return <NavIcon key={index} isActive ={activeIcon == index && true} onClickNavIcon={()=> HandleClickIcon(index)}>{icon}</NavIcon>
    })

  return (
    <Stack className="side-bar-container">
      <Stack className="side-bar-top-section" spacing={2}>
        <Box className="logo-container">
            <img src={isDarkMode? LogoDark : Logo} className="img-logo"/>
        </Box>
        {NavBarIconsList}
        <Divider className="nav-divider" orientation="horizontal" variant="middle"/>
        <NavIcon isActive ={activeIcon == 3 && true} onClickNavIcon={()=> HandleClickIcon(3)}>{SettingsIcon}</NavIcon>
      </Stack>
      
      <Stack className="side-bar-bottom-section" spacing={3}>        
        <IconButton  onClick={onThemeToggle} color="inherit" >
          {isDarkMode? themeIcons[0] : themeIcons[1]}
        </IconButton>
        <Avatar className='avatar-container' src={Ava}/>
      </Stack>
      
    </Stack>
  )
}
