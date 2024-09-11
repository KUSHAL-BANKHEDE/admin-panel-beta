import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({ customers: 0, serviceProviders: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const res = await axios.get('http://localhost:5001/api/admin/stats');
      setStats(res.data);
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Total Customers: {stats.customers}</p>
      <p>Total Service Providers: {stats.serviceProviders}</p>
    </div>
  );
};

export default Dashboard;
