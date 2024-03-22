// iconData.js
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { PiUsers, PiGear } from 'react-icons/pi';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineLightMode , MdOutlineDarkMode } from "react-icons/md";

export const NavBarIcons = [
  <IoChatbubbleEllipsesOutline className='nav-icon'/>,
  <PiUsers className='nav-icon'/>,
  <FiPhone className='nav-icon'/>,
];

export const SettingsIcon = <PiGear className='nav-icon'/>

export const themeIcons = [
  <MdOutlineLightMode className='nav-icon'/>,
  <MdOutlineDarkMode className='nav-icon'/>,
];
