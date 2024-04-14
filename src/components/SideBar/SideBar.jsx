import {Stack , Box, Divider, Avatar, IconButton} from '@mui/material';
import Logo from '../../assets/images/logo.png';
import LogoDark from '../../assets/images/logo-dark.png';
import Ava from '../../assets/images/test_avatar.jpg';
import { SideBarIcons , SettingsIcon, themeIcons} from '../../data/icons';
import { SideIcon } from './SideIcon';
import "./index.css";
import { useState } from 'react';



export const SideBar = ({onThemeToggle , isDarkMode}) => {
  const [activeIcon, setActiveIcon] = useState(0);

    const HandleClickIcon = (index) =>{
      setActiveIcon(index)
    }

    const SideBarIconsList = SideBarIcons.map((icon, index)=>{
        return <SideIcon key={index} isActive ={activeIcon == index && true} onClickNavIcon={()=> HandleClickIcon(index)}>{icon}</SideIcon>
    })

  return (
    <Stack className="side-bar-container">
      <Stack className="side-bar-top-section">
        <Box className="logo-container">
            <img src={isDarkMode? LogoDark : Logo} className="img-logo"/>
        </Box>
        <Stack spacing={2} alignItems= "center">
          {SideBarIconsList}
          <Divider className="sidebar-divider" orientation="horizontal" variant="middle"/>
          <SideIcon isActive ={activeIcon == 3 && true} onClickNavIcon={()=> HandleClickIcon(3)}>{SettingsIcon}</SideIcon>
        </Stack>
        
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
