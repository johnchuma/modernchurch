import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import MainLayout from './layouts/mainLayout';
import HomePage from './pages/website/homePage';
import LoginPage from './auth/loginPage';
import DashboardLayout from './layouts/dashboardLayout';
import DashboardPage from './pages/dashboard/dashboardPage';

function App() {
  return (
   <div className=' font-aeonik overflow-x-hidden'>
   <BrowserRouter>
   <Routes>
    <Route  path='/' element={<MainLayout/>}>
       <Route path='/' index element={<HomePage/>}/>
    </Route>
    <Route path='/dashabord' element={<DashboardLayout/>}>
    <Route path='dashboard'  element={<DashboardPage/>}/>
    </Route>
    <Route path='/login'  element={<LoginPage/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
