import React from "react";
import MainBoardIPO from "./MainBoardIPO";
import { FiHome, FiMail, FiFileText, FiSettings, FiUser, FiInfo } from 'react-icons/fi';
import { FiTool } from 'react-icons/fi';
import { BsCartCheck } from 'react-icons/bs';
import { FaSearch, FaTrash, FaEye } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';


const Dashboard = () => {


  const location = useLocation();
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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-5 shadow-sm min-h-screen">
        {/* Logo */}
        <div className="flex items-center mb-10">
          <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center mr-2 font-bold">
            BF
          </div>
          <span className="font-semibold text-lg text-gray-800">Bluestock Fintech</span>
        </div>

        {/* Menu */}
        <nav className="space-y-6">
          <div>
            <div className="text-sm text-gray-400 uppercase mb-3 tracking-wider">Menu</div>
            <div className="flex flex-col space-y-2">
              {menuItems.map(renderNavItem)}
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-400 uppercase mb-3 tracking-wider">Others</div>
            <div className="flex flex-col space-y-2">
              {otherItems.map(renderNavItem)}
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-lg px-4 py-2 w-1/3 shadow-sm"
          />
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Hi, Vishal</span>
            <div className="bg-orange-100 text-orange-600 rounded-full h-8 w-8 flex items-center justify-center font-semibold">V</div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 min-h-screen">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* IPO Dashboard India */}
            <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
              <h3 className="text-lg font-semibold mb-2">IPO Dashboard India</h3>
              <p className="text-green-500 font-medium mb-6">↑ 20 IPO in Gain</p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full bg-purple-300 flex items-center justify-center relative">
                  <span className="text-white text-center font-bold">9<br /><span className="text-xs">IPO in Loss</span></span>
                </div>
                <div className="w-32 h-32 rounded-full bg-orange-400 flex items-center justify-center relative">
                  <span className="text-white text-center font-bold">30<br /><span className="text-xs">Total IPO</span></span>
                </div>
                <div className="w-28 h-28 rounded-full bg-cyan-400 flex items-center justify-center relative">
                  <span className="text-white text-center font-bold">20<br /><span className="text-xs">IPO in Gain</span></span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <p className="text-sm text-gray-500 mb-4">Adipiscing elit, sed do eiusmod tempor</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src="https://cdn.worldvectorlogo.com/logos/nse-india.svg" alt="NSE" className="w-6 h-6" />
                    <span className="text-sm">NSE India</span>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Visit Now</a>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src="https://cdn.worldvectorlogo.com/logos/bombay-stock-exchange-1.svg" alt="BSE" className="w-6 h-6" />
                    <span className="text-sm">BSE India</span>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Visit Now</a>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src="https://cdn.worldvectorlogo.com/logos/sebi.svg" alt="SEBI" className="w-6 h-6" />
                    <span className="text-sm">SEBI</span>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Visit Now</a>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-900 rounded-full" />
                    <span className="text-sm">Money Control</span>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Visit Now</a>
                </li>
              </ul>
            </div>

            {/* Main Board IPO */}
            <div className="bg-white p-6 rounded-lg shadow-md col-span-1 relative">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Main Board IPO</h3>
                  <p className="text-sm text-gray-500">From 01 Jan 2024</p>
                </div>
                <button className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-md shadow">View Report</button>
              </div>

              {/* Donut Chart */}
              <div className="flex justify-center items-center mb-4">
                <div className="relative w-28 h-28">
                  <div className="w-full h-full rounded-full border-8 border-blue-300 border-t-blue-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs text-white bg-gray-800 p-2 rounded-md text-center">
                      <div className="font-semibold">Afternoon</div>
                      <div className="text-[10px]">IPO NSE & BSE</div>
                      <div className="text-lg font-bold">15</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-between text-sm text-gray-600 px-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" /> Upcomming
                  <span className="ml-1 font-medium">15</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" /> New Listed
                  <span className="ml-1 font-medium">25</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-300" /> Ongoing
                  <span className="ml-1 font-medium">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
