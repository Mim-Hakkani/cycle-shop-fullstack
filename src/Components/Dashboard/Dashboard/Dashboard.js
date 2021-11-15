import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import '../Dashboard/Dashboard.css'
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../AddProducts/AddProducts';
import ManageAll from '../ManageAllProducts/ManageAll';
import Manageorder from '../Manageorder/Manageorder';
import Myorder from '../Myorder/Myorder';
import Pay from '../Pay/Pay';
import Reviews from '../Reviews/Reviews';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../../context/useAuth';
const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin}=useAuth()
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
       <Link to ="/home">
       <Button variant="contained" sx={{color:'primary',margin:'10px'}}>Go WebSite Main</Button>
       </Link>



      {
        admin? <Box>
          <List>
                <Link to={`${url}/makeadmin`}>Make Admin</Link> 
      </List>
      <List>
          <Link to={`${url}/manageall`}>Manage Products</Link>
      </List>
      <List>
          <Link to={`${url}/manageorder`}>Manage All Order</Link>
      </List>
      <List>
        <Link to={`${url}/addproducts`}>Add Products</Link>      
     </List>
        </Box>
        :
        <Box>
      <List>
           <Link to={`${url}/myorder`}>My Order</Link>
           
      </List>
      <List>
          <Link to={`${url}/pay`}>PayMent</Link>
      </List>
      <List>
        <Link to={`${url}/review`}>Clint Review</Link><br/> 
      </List>
        </Box>
      }



      

      <Button variant="contained" sx={{color:'primary',margin:'10px'}}>Log Out</Button>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Hakkani Bycycle Server Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       


        <Switch>
        
        <Route path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>

        <Route path={`${path}/addproducts`}>
          <AddProducts></AddProducts>
        </Route>
        <Route path={`${path}/manageAll`}>
          <ManageAll></ManageAll>
        </Route>
        <Route path={`${path}/manageorder`}>
          <Manageorder></Manageorder>
        </Route>
        <Route path={`${path}/myorder`}>
          <Myorder></Myorder>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        <Route path={`${path}/review`}>
          <Reviews></Reviews>
        </Route>
      </Switch>






      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;