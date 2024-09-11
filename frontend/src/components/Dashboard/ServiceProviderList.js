import { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceProviderList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/service-providers');
        setProviders(res.data);
      } catch (error) {
        console.error('Error fetching service providers:', error);
      }
    };

    fetchProviders();
  }, []);

  return (
    <div>
      <h2>Service Provider List</h2>
      <ul>
        {providers.map((provider) => (
          <li key={provider._id}>
            {provider.name} - {provider.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceProviderList;
