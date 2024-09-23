import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthState from './Routes/AuthState';
import PrivRoute from './Routes/PrivRoute';
import AdminDashboard from './Screens/Dashboard/Admin/AdminDashboard';
import BeachViewRoom from './Screens/Rooms/BeachViewRoom';
import PoolSideRoom from './Screens/Rooms/PoolSideRoom';
import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';
import CustomerDashboard from './Screens/Dashboard/Customer/CustomerDashboard';
import ManagerDashboard from './Screens/Dashboard/Manager/ManagerDashboard';
import StaffDashboard from './Screens/Dashboard/Staff/StaffDashboard';
import RoomDetails from './Screens/Rooms/RoomDetails';
import BookBeachViewRooms from './Screens/Booking/BookBeachViewRoom';
import BookPoolSideRooms from './Screens/Booking/BookPoolSideRoom.JSX';
import Payment from './Screens/Payment/Payment';
import Contact from './Screens/Contact/Contact';
import GymPayment from './Screens/Payment/GymPayment';
import Gym from './Screens/Booking/Gym';
import Services from './Screens/Services/Services';
import GymDetails from './Screens/Gym/GymDetails';
import BR1 from './Screens/ShowTable/BR1';
import BR2 from './Screens/ShowTable/BR2';
import BR3 from './Screens/ShowTable/BR3';
import BGYM1 from './Screens/ShowTable/BGYM1';
import BGYM2 from './Screens/ShowTable/BGYM2';
import BGYM3 from './Screens/ShowTable/BGYM3';
import CT1 from './Screens/ShowContactTable/CT1';
import CT2 from './Screens/ShowContactTable/CT2';
import CT3 from './Screens/ShowContactTable/CT3';
import SP1 from './Screens/ShowPayment/SP1';
import SP2 from './Screens/ShowPayment/SP2';


function App() {
  return (
    <Routes>
      <Route element={<AuthState />}>
        <Route index element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
      
      <Route path="/admin-dashboard" element={<PrivRoute requiredRole="admin" />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
        </Route>
      </Route>
      
      <Route path="/customer-dashboard" element={<PrivRoute requiredRole="customer" />}>
        <Route path="/customer-dashboard" element={<CustomerDashboard />}>
        </Route>
      </Route>
      
      <Route path="/manager-dashboard" element={<PrivRoute requiredRole="manager" />}>
        <Route  path="/manager-dashboard" element={<ManagerDashboard />}>
        </Route>
      </Route>
      
      <Route path="/staff-dashboard" element={<PrivRoute requiredRole="staff" />}>
        <Route path="/staff-dashboard" element={<StaffDashboard />}>
        </Route>
      </Route>

      {/* common pages routes */}
      <Route path='Rooms/BeachViewRooms' element={<BeachViewRoom />} />
      <Route path='Rooms/PoolSideRooms' element={<PoolSideRoom />} />
      <Route path="/Rooms/:id" element={<RoomDetails />} />
      <Route path='Booking/BookPoolSideRooms' element={<BookPoolSideRooms/>}/>
      <Route path='Booking/BookBeachViewRooms' element={<BookBeachViewRooms/>}/>
      <Route path='Booking/PaymentMethod' element={<Payment/>}/>
      <Route path='ContactPage' element={<Contact/>}/>
      <Route path='Booking/GYM' element={<Gym/>}/>
      <Route path='/Booking/PaymentMethod/Gym' element={<GymPayment/>}/>
      <Route path='Services' element={<Services/>}/>
      <Route path="/gym/:id" element={<GymDetails />} />
      <Route path='/Booking/Admin/RoomTable' element={<BR1/>}/>
      <Route path='/Booking/Admin/GymTable' element={<BGYM1/>}/>
      <Route path='/Booking/Manager/RoomTable' element={<BR2/>}/>
      <Route path='/Booking/Manager/GymTable' element={<BGYM2/>}/>
      <Route path='/Booking/Staff/RoomTable' element={<BR3/>}/>
      <Route path='/Booking/Staff/GymTable' element={<BGYM3/>}/>
      <Route path='/Contact/Admin/ContactTable' element={<CT1/>} />
      <Route path='/Contact/Manager/ContactTable' element={<CT2/>}/>
      <Route path='/Contact/Staff/ContactTable' element={<CT3/>}/>
      <Route path='/Payment/Admin/PaymentTable' element={<SP1/>}/>
      <Route path='/Payment/Manager/PaymentTable' element={<SP2/>}/>
          </Routes>
  );
}

export default App;
