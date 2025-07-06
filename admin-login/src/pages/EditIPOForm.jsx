import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditIPOForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ipoList, setIpoList] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    company: '',
    priceBand: '',
    open: '',
    close: '',
    size: '',
    type: '',
    listing: '',
    status: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('ipoList');
    if (stored) {
      const parsed = JSON.parse(stored);
      setIpoList(parsed);
      const found = parsed.find(item => item.id === id);
      if (found) {
        setFormData(found);
      } else {
        setError('IPO not found.');
      }
    } else {
      setError('No IPO data available.');
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = ipoList.map(item => item.id === id ? formData : item);
    localStorage.setItem('ipoList', JSON.stringify(updatedList));
    setSuccess(true);
    setTimeout(() => navigate('/manage-ipo'), 1500);
  };

  if (error) {
    return <p className="text-red-600 p-4">{error}</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Edit IPO - {formData.company}</h2>
      {success && <p className="text-green-600 mb-4">IPO updated successfully!</p>}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 bg-white p-6 rounded shadow">
        <div>
          <label>Company Name</label>
          <input name="company" value={formData.company} onChange={handleChange} className="border p-2 rounded w-full" />
        </div>
        <div>
          <label>Price Band</label>
          <input name="priceBand" value={formData.priceBand} onChange={handleChange} className="border p-2 rounded w-full" />
        </div>
        <div>
          <label>Open Date</label>
          <input type="date" name="open" value={formData.open} onChange={handleChange} className="border p-2 rounded w-full" />
        </div>
        <div>
          <label>Close Date</label>
          <input type="date" name="close" value={formData.close} onChange={handleChange} className="border p-2 rounded w-full" />
        </div>
        <div>
          <label>Issue Size</label>
          <input name="size" value={formData.size} onChange={handleChange} className="border p-2 rounded w-full" />
        </div>
        <div>
          <label>Issue Type</label>
          <input name="type" value={formData.type} onChange={handleChange} className="border p-2 rounded w-full" />
        </div>
        <div>
          <label>Listing Date</label>
          <input type="date" name="listing" value={formData.listing} onChange={handleChange} className="border p-2 rounded w-full" />
        </div>
        <div>
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange} className="border p-2 rounded w-full">
            <option value="">Select Status</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Coming">Coming</option>
            <option value="New Listed">New Listed</option>
          </select>
        </div>

        <div className="col-span-2 flex justify-end gap-2 mt-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
          <button type="button" onClick={() => navigate('/manage-ipo')} className="border px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditIPOForm;
