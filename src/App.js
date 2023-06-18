import './App.css';
import { NavLink, Routes, Route, useNavigate } from "react-router-dom"
import { Dashboard } from './Dashboard';
import { AllStudent } from './AllStudent';
import { AllTeachers } from './AllTeachers';
import { CreateStudent } from './CreateStudent';
import { CreateTeacher } from './CreateTeacher';
import { EdittStudent } from './EdittStudent';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Editteacher } from './Editteacher';
function App() {
  const navigate=useNavigate()
  return (
    <>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Admin Dashboard for teacher student management
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem>
                <ListItemButton onClick={() =>navigate("/")}>
                  Dashboard
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={() =>navigate("/allteachers")}>
                  Teachers
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={() =>navigate("/allstudents")}>
                  Students
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box sx={{width:"100%", marginTop: "70px" }}>
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route path='/allstudents' element={<AllStudent />} />
            <Route path='/allteachers' element={<AllTeachers />} />
            <Route path='/createstudent' element={<CreateStudent />} />
            <Route path='/createteacher' element={<CreateTeacher />} />
            <Route path='/editstudent/:studentId' element={<EdittStudent />} />
            <Route path='/editteacher/:teacherId' element={<Editteacher />} />
          </Routes>
        </Box>
      </Box>

    </>
  );
}

export default App;
