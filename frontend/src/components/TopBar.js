import AppBar from './AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const TopBar=({open, handleDrawerOpen})=>  (<AppBar position="fixed" open={open}>
<Toolbar>
  <IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={handleDrawerOpen}
    edge="start"
    sx={{
      marginRight: 5,
      ...(open && { display: 'none' }),
    }}
  >
    <MenuIcon />
  </IconButton>
  <Typography variant="h6" noWrap component="div">
    SID-STAR Project
  </Typography>
</Toolbar>
</AppBar>)

export default TopBar