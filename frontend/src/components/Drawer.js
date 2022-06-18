import closedMixin from "./closedMixin";
import openedMixin from "./openedMixin";
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import config from "./config";

const drawerWidth=config.drawerWidth

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

export default Drawer