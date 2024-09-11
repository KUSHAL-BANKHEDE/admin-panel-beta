import { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await axios.get('http://localhost:5001/api/services');
      setServices(res.data);
    };
    fetchServices();
  }, []);

  return (
    <div>
      <h2>Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service._id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
