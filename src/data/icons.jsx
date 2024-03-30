import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { PiUsers, PiGear, PiPhone} from 'react-icons/pi';
import { MdOutlineLightMode , MdOutlineDarkMode } from "react-icons/md";

export const SideBarIcons = [
  <IoChatbubbleEllipsesOutline className='nav-icon'/>,
  <PiUsers className='nav-icon'/>,
  <PiPhone  className='nav-icon'/>,
];

export const SettingsIcon = <PiGear className='nav-icon'/>

export const themeIcons = [
  <MdOutlineLightMode className='nav-icon'/>,
  <MdOutlineDarkMode className='nav-icon'/>,
];
