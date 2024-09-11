import axios from 'axios';

const BASE_URL = 'http://localhost:5001/api';

// API call to login the admin
export const loginAdmin = async (username, password) => {
  return axios.post(`${BASE_URL}/admin/login`, { username, password });
};

// Fetch list of customers
export const getCustomers = async () => {
  return axios.get(`${BASE_URL}/customers`);
};

// Fetch list of service providers
export const getServiceProviders = async () => {
  return axios.get(`${BASE_URL}/service-providers`);
};

// Fetch dashboard statistics
export const getStats = async () => {
  return axios.get(`${BASE_URL}/admin/stats`);
};

// Fetch list of services
export const getServices = async () => {
  return axios.get(`${BASE_URL}/services`);
};

// Add a new service
export const addService = async (service) => {
  return axios.post(`${BASE_URL}/services`, service);
};
