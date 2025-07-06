import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ViewIPO = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ipo, setIpo] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("viewIPO");
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed.id === id) {
        setIpo(parsed);
      }
    }
  }, [id]);

  if (!ipo) return <div className="text-center mt-10 text-red-500">IPO Not Found</div>;

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">IPO Detail - {ipo.company}</h2>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <p><strong>Company:</strong> {ipo.company}</p>
        <p><strong>Price Band:</strong> {ipo.priceBand}</p>
        <p><strong>Open:</strong> {ipo.open}</p>
        <p><strong>Close:</strong> {ipo.close}</p>
        <p><strong>Issue Size:</strong> {ipo.size}</p>
        <p><strong>Issue Type:</strong> {ipo.type}</p>
        <p><strong>Listing Date:</strong> {ipo.listing}</p>
        <p><strong>Status:</strong> {ipo.status}</p>
      </div>
      <button
        onClick={() => navigate("/manage-ipo")}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to IPO List
      </button>
    </div>
  );
};

export default ViewIPO;
