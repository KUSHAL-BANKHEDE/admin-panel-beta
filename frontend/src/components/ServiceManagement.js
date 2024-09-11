// src/components/ServiceManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [serviceName, setServiceName] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [serviceCategory, setServiceCategory] = useState('');
  const [serviceSubcategory, setServiceSubcategory] = useState('');

  useEffect(() => {
    // Fetch services
    const fetchServices = async () => {
      const res = await axios.get('/api/services');
      setServices(res.data);
    };
    fetchServices();
  }, []);

  const handleAddService = async () => {
    await axios.post('/api/services', {
      name: serviceName,
      price: servicePrice,
      category: serviceCategory,
      subcategory: serviceSubcategory,
    });
    // Refresh service list
  };

  return (
    <div className="service-management">
      <h1>Service Management</h1>
      <input type="text" placeholder="Name" onChange={(e) => setServiceName(e.target.value)} />
      <input type="number" placeholder="Price" onChange={(e) => setServicePrice(e.target.value)} />
      <input type="text" placeholder="Category" onChange={(e) => setServiceCategory(e.target.value)} />
      <input type="text" placeholder="Subcategory" onChange={(e) => setServiceSubcategory(e.target.value)} />
      <button onClick={handleAddService}>Add Service</button>
      {/* Display list of services */}
    </div>
  );
};

export default ServiceManagement;
