import { useState } from 'react';
import axios from 'axios';

const AddService = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5001/api/services', { name, price });
  };

  return (
    <div>
      <h2>Add Service</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Service Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
