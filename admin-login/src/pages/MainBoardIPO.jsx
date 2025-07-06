import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiMail, FiFileText, FiSettings, FiUser, FiInfo, FiTool } from 'react-icons/fi';
import { BsCartCheck } from 'react-icons/bs';
import { FaSearch, FaTrash, FaEye } from 'react-icons/fa';

const initialIpoData = [
  {
    id: "1",
    company: "Adani Power",
    priceBand: "₹ 329 - 136",
    open: "2023-06-03",
    close: "2024-06-05",
    size: "45530.15 Cr.",
    type: "Book Built",
    listing: "2023-06-10",
    status: "Ongoing",
  },
  {
    id: "2",
    company: "VBL LTD",
    priceBand: "₹ 229 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    size: "1330.15 Cr.",
    type: "Book Built",
    listing: "2018-06-10",
    status: "Coming",
  },
  {
    id: "3",
    company: "Tata Motor",
    priceBand: "₹ 12549 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    size: "1340.15 Cr.",
    type: "Book Built",
    listing: "2016-06-10",
    status: "New Listed",
  },
  {
    id: "4",
    company: "HDFC LTD",
    priceBand: "₹ 1244 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    size: "830.15 Cr.",
    type: "Book Built",
    listing: "2029-06-11",
    status: "Coming",
  },
  {
    id: "5",
    company: "Tata Motor",
    priceBand: "₹ 629 - 136",
    open: "2024-06-01",
    close: "2024-06-05",
    size: "820.15 Cr.",
    type: "Book Built",
    listing: "2023-06-10",
    status: "Ongoing",
  },
  {
    id: "6",
    company: "VBL LTD",
    priceBand: "₹ 629 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    size: "130.15 Cr.",
    type: "Book Built",
    listing: "2024-06-10",
    status: "Coming",
  },
  {
    id: "7",
    company: "Tata Motor",
    priceBand: "₹ 6729 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    size: "170.15 Cr.",
    type: "Book Built",
    listing: "2027-06-10",
    status: "New Listed",
  },
  {
    id: "8",
    company: "VBL LTD",
    priceBand: "₹ 1629 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    size: "130.15 Cr.",
    type: "Book Built",
    listing: "2022-06-10",
    status: "Coming",
  },
  {
    id: "9",
    company: "Tata Motor",
    priceBand: "₹ 2329 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    size: "130.15 Cr.",
    type: "Book Built",
    listing: "2023-06-10",
    status: "New Listed",
  },
  {
    id: "10",
    company: "VBL LTD",
    priceBand: "₹ 329 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    size: "130.15 Cr.",
    type: "Book Built",
    listing: "2021-06-10",
    status: "Coming",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'Ongoing':
      return 'bg-green-100 text-green-700 border-green-300';
    case 'Coming':
      return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    case 'New Listed':
      return 'bg-red-100 text-red-700 border-red-300';
    default:
      return 'bg-gray-100 text-gray-600 border-gray-300';
  }
};

const MainBoardIPO = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [ipoData, setIpoData] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("ipoList");

    if (!stored || JSON.parse(stored).length === 0) {
      const initial = initialIpoData;
      localStorage.setItem("ipoList", JSON.stringify(initial));
      setIpoData(initial);
    } else {
      setIpoData(JSON.parse(stored));
    }
  }, []);


  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this IPO?")) {
      const updated = ipoData.filter(ipo => ipo.id !== id);
      setIpoData(updated);
      localStorage.setItem("ipoList", JSON.stringify(updated)); // sync deletion
      alert("IPO deleted successfully!");
    }
  };

  const menuItems = [
    { name: 'Dashboard', icon: <FiHome />, path: '/dashboard' },
    { name: 'Manage IPO', icon: <BsCartCheck />, path: '/manage-ipo' },
    { name: 'IPO Subscription', icon: <FiMail />, path: '/ipo-subscription' },
    { name: 'IPO Allotment', icon: <FiFileText />, path: '/ipo-allotment' },
  ];

  const otherItems = [
    { name: 'Settings', icon: <FiSettings />, path: '/settings' },
    { name: 'API Manager', icon: <FiTool />, path: '/api-manager' },
    { name: 'Accounts', icon: <FiUser />, path: '/accounts' },
    { name: 'Help', icon: <FiInfo />, path: '/help' },
  ];

  const renderNavItem = (item) => (
    <Link
      to={item.path}
      key={item.name}
      className={`flex items-center gap-2 px-3 py-2 rounded-md ${location.pathname === item.path
          ? 'bg-purple-100 text-purple-600 font-medium'
          : 'text-gray-500 hover:text-purple-600'
        }`}
    >
      <span className="text-lg">{item.icon}</span>
      <span>{item.name}</span>
    </Link>
  );

  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-5 shadow-sm min-h-screen">
        <div className="flex items-center mb-10">
          <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center mr-2 font-bold">BF</div>
          <span className="font-semibold text-lg text-gray-800">Bluestock Fintech</span>
        </div>
        <nav className="space-y-6">
          <div>
            <div className="text-sm text-gray-400 uppercase mb-3 tracking-wider">Menu</div>
            <div className="flex flex-col space-y-2">{menuItems.map(renderNavItem)}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 uppercase mb-3 tracking-wider">Others</div>
            <div className="flex flex-col space-y-2">{otherItems.map(renderNavItem)}</div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center border px-4 py-2 rounded-lg bg-white shadow-sm w-1/3">
            <FaSearch className="text-gray-400 mr-2" />
            <input type="text" placeholder="Search" className="outline-none w-full text-sm" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Hi, Vishal</span>
            <div className="bg-orange-100 text-orange-600 rounded-full h-8 w-8 flex items-center justify-center font-semibold">V</div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Upcoming IPO | Dashboard</h2>
          <Link to="/add-ipo">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register IPO</button>
          </Link>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="w-full text-sm text-left text-gray-600 border-separate border-spacing-y-3">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Price Band</th>
                <th className="px-4 py-3">Open</th>
                <th className="px-4 py-3">Close</th>
                <th className="px-4 py-3">Issue Size</th>
                <th className="px-4 py-3">Issue Type</th>
                <th className="px-4 py-3">Listing Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
                <th className="px-4 py-3">Delete/View</th>
              </tr>
            </thead>
            <tbody>
              {ipoData.map((ipo) => (
                <tr key={ipo.id} className="bg-white shadow rounded">
                  <td className="px-4 py-2 font-medium">{ipo.company}</td>
                  <td className="px-4 py-2">{ipo.priceBand}</td>
                  <td className="px-4 py-2">{ipo.open}</td>
                  <td className="px-4 py-2">{ipo.close}</td>
                  <td className="px-4 py-2">{ipo.size}</td>
                  <td className="px-4 py-2">{ipo.type}</td>
                  <td className="px-4 py-2">{ipo.listing}</td>
                  <td className="px-4 py-2">
                    <span className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusStyle(ipo.status)}`}>
                      {ipo.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => navigate(`/edit-ipo/${ipo.id}`)}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white text-xs px-3 py-1 rounded"
                    >
                      Update
                    </button>
                  </td>
                  <td className="px-4 py-2 flex gap-3 items-center text-lg">
                    <FaTrash
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => handleDelete(ipo.id)}
                    />
                    <FaEye
                      className="text-gray-600 hover:text-gray-800 cursor-pointer"
                      onClick={() => {
                        localStorage.setItem('viewIPO', JSON.stringify(ipo));
                        navigate(`/view-ipo/${ipo.id}`);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default MainBoardIPO;