import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
import { isValidPath} from '../../global/routers/Routes';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
// import HomeIcon from '@mui/icons-material/Home';
// import UserIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';


import './SideNav.css';

const lists = [
  {
    id: 'sub-nav-1',
    label: 'Dashboard',
    icon: DashboardIcon,
    subItems: ['Dashboard'],
    path: '/dashboard',
  },
  {
    id: 'sub-nav-2',
    label: 'Management',
    icon: MailIcon,
    subItems: ['Assert', 'Alert', 'Device','Site', 'User'],
    path: '/management',
  },
  {
    id: 'sub-nav-3',
    label: 'Configuration',
    icon: SettingsIcon,
    subItems: ['Alert', 'Master', 'Slave'],
    path: '/configuration',
  },
  {
    id: 'sub-nav-4',
    label: 'Upgradation',
    icon: TrendingUpIcon,
    subItems: ['Firmware'],
    path: '/upgradation',
  },
  {
    id: 'sub-nav-5',
    label: 'Maintenance',
    icon: SettingsIcon,
    subItems: ['Event', 'Real Data', 'Log'],
    path: '/maintenance',
  },
];

interface SideNavProps {
  navigate: (path: string) => void;
}

export default function SideNav({ navigate }: SideNavProps) {
  const [hoveredItem, setHoveredItem] = React.useState(null);

  const handleItemHover = (index) => {
    setHoveredItem(index);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const handleSubItemClick = (subItem: string, path: string) => {
    if (isValidPath(path)) {
      navigate(path);
    } else {
      // Page Not Found
      navigate('/not-found');
    }
  };
  
  return (
    <Box sx={{ display: 'flex' }}>
      <List>
        {lists.map((item, index) => {
          const IconComponent = item.icon || MailIcon;

          return (
            <ListItem
              key={index}
              disablePadding
              onMouseEnter={() => handleItemHover(index)}
              onMouseLeave={handleItemLeave}
            >
              <ListItemButton className="MuiListItemButton-root">
                <ListItemIcon>
                  <IconComponent />
                </ListItemIcon>
                {hoveredItem === index && (
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '100%',
                      top: 0,
                      backgroundColor: 'background.paper',
                      boxShadow: 1,
                      p: 2,
                    }}
                  >
                    <List className="sub-list">
                    <ListItem className="sub-list-title">{item.label}</ListItem>
                      {item.subItems.map((subItem, subIndex) => (
                        <ListItem key={subIndex} disablePadding>
                          <ListItemButton onClick={() => handleSubItemClick(subItem, `${item.path}/${subItem.toLowerCase()}`)}>
                            <ListItemIcon>
                              <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary={subItem} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
