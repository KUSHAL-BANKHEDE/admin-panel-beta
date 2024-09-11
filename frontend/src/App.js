import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ServiceList from './components/ServiceManagement/ServiceList';
import AddService from './components/ServiceManagement/AddService';
import ServiceManagement from './components/ServiceManagement';
import BookingHistory from './components/BookingHistory';
import ReviewManagement from './components/ReviewManagement';
import ChatHistory from './components/ChatHistory';
import SendNotification from './components/SendNotification';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/servicess" element={<ServiceList />} />
        <Route path="/add-service" element={<AddService />} />
        <Route path="/services" element={<ServiceManagement />} />
        <Route path="/bookings" element={<BookingHistory />} />
        <Route path="/reviews" element={<ReviewManagement />} />
        <Route path="/chats" element={<ChatHistory userId1="user1" userId2="user2" />} /> {/* Replace with actual user IDs */}
        <Route path="/notifications" element={<SendNotification />} />
      </Routes>
    
  );
}

export default App;
