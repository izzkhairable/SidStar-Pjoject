import * as React from 'react';
import { useTheme } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import DrawerHeader from './DrawerHeader';
import Drawer from './Drawer';
import TopBar from './TopBar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
           {open && (<Typography variant='body1' textAlign={'left'} sx={{ fontWeight: 'light', px: 2.5, py: 0 }}>Source Code</Typography>)}

          <ListItem disablePadding sx={{ display: 'block' }}>
            <Link href="https://github.com/izzkhairable/SidStar-Project" color="inherit" target="_blank" underline="none" rel="noopener">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary={'Project Repository'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>

        </List>
        <Divider />

        <List>
        {open && (<Typography variant='body1' textAlign={'left'} sx={{ fontWeight: 'light', px: 2.5, py: 0 }}>Contact Me</Typography>)}

          <ListItem disablePadding sx={{ display: 'block' }}>
            <Link href="https://www.linkedin.com/in/izzkhair/" color="inherit" target="_blank" underline="none" rel="noopener">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >

                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText primary={'LinkedIn'} sx={{ opacity: open ? 1 : 0 }} />

              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
          <Link href="mailto:izzkhair@gmail.com" color="inherit" target="_blank" underline="none" rel="noopener">
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Email'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
}