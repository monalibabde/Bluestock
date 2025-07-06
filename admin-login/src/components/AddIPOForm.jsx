import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import {
  FiHome,
  FiMail,
  FiFileText,
  FiSettings,
  FiUser,
  FiInfo,
  FiTool,
} from "react-icons/fi";

const AddIPOForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    companyName: "",
    priceBand: "",
    open: "",
    close: "",
    issueSize: "",
    issueType: "",
    listingDate: "",
    status: "",
    ipoPrice: "",
    listingPrice: "",
    listingGain: "",
    listingDateListed: "",
    cmp: "",
    currentReturn: "",
    rhp: "",
    drhp: "",
  });

  const [logo, setLogo] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setLogo(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "companyName",
      "priceBand",
      "open",
      "close",
      "issueSize",
      "issueType",
      "listingDate",
      "status",
    ];

    for (let field of requiredFields) {
      if (!formData[field] || formData[field].trim() === "") {
        alert(`Please fill in the required field`);
        return;
      }
    }

    const newIPO = {
      id: Date.now().toString(),
      company: formData.companyName,
      priceBand: formData.priceBand,
      open: formData.open,
      close: formData.close,
      size: formData.issueSize,
      type: formData.issueType,
      listing: formData.listingDate,
      status: formData.status,
      ipoPrice: formData.ipoPrice,
      listingPrice: formData.listingPrice,
      listingGain: formData.listingGain,
      listingDateListed: formData.listingDateListed,
      cmp: formData.cmp,
      currentReturn: formData.currentReturn,
      rhp: formData.rhp,
      drhp: formData.drhp,
      logo: logo,
    };

    const stored = localStorage.getItem("ipoList");
    const existingIPOs = stored ? JSON.parse(stored) : [];
    const updatedList = [...existingIPOs, newIPO];
    localStorage.setItem("ipoList", JSON.stringify(updatedList));

    alert("IPO Registered Successfully!");
    navigate("/manage-ipo");
  };


  const handleCancel = () => {
    navigate("/manage-ipo");
  };

  const menuItems = [
    { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
    { name: "Manage IPO", icon: <BsCartCheck />, path: "/manage-ipo" },
    { name: "IPO Subscription", icon: <FiMail />, path: "/ipo-subscription" },
    { name: "IPO Allotment", icon: <FiFileText />, path: "/ipo-allotment" },
  ];

  const otherItems = [
    { name: "Settings", icon: <FiSettings />, path: "/settings" },
    { name: "API Manager", icon: <FiTool />, path: "/api-manager" },
    { name: "Accounts", icon: <FiUser />, path: "/accounts" },
    { name: "Help", icon: <FiInfo />, path: "/help" },
  ];

  const renderNavItem = (item) => (
    <Link
      to={item.path}
      key={item.name}
      className={`flex items-center gap-2 px-3 py-2 rounded-md ${location.pathname === item.path
          ? "bg-purple-100 text-purple-600 font-medium"
          : "text-gray-500 hover:text-purple-600"
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
        <div className="flex items-center mb-10">
          <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center mr-2 font-bold">
            BF
          </div>
          <span className="font-semibold text-lg text-gray-800">
            Bluestock Fintech
          </span>
        </div>
        <nav className="space-y-6">
          <div>
            <div className="text-sm text-gray-400 uppercase mb-3 tracking-wider">
              Menu
            </div>
            <div className="flex flex-col space-y-2">
              {menuItems.map(renderNavItem)}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400 uppercase mb-3 tracking-wider">
              Others
            </div>
            <div className="flex flex-col space-y-2">
              {otherItems.map(renderNavItem)}
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-lg px-4 py-2 w-1/3 shadow-sm"
          />
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Hi, Vishal</span>
            <div className="bg-orange-100 text-orange-600 rounded-full h-8 w-8 flex items-center justify-center font-semibold">
              V
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Upcoming IPO Information
          </h2>
          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium"
            >
              Register
            </button>
            <button
              onClick={handleCancel}
              className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6">Manage your IPO Details</p>

        <div className="flex rounded-md border border-gray-200 bg-white shadow-sm overflow-hidden">
          {/* Left Side Nav */}
          <aside className="w-56 border-r bg-gray-50 py-6 px-4">
            <div className="space-y-3">
              <button className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-600 font-medium rounded-md w-full text-left">
                <span>📄</span>
                IPO Information
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-600 w-full text-left">
                <span>📋</span>
                IPO Info
              </button>
            </div>
          </aside>

          {/* Form Content */}
          <div className="flex-1 p-8">
            <h3 className="text-lg font-semibold mb-1">IPO Information</h3>
            <p className="text-sm text-gray-500 mb-6">Enter IPO Details</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
                {logo ? (
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm text-gray-400">Logo</span>
                )}
              </div>
              <div className="space-x-2">
                <input type="file" onChange={handleLogoUpload} />
                <button
                  onClick={() => setLogo(null)}
                  className="border border-blue-600 text-blue-600 px-4 py-1 text-sm rounded-md"
                >
                  Upload Logo
                </button>
                <button
                  onClick={() => setLogo(null)}
                  className="border border-gray-300 text-gray-600 px-4 py-1 text-sm rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>

            <form className="grid grid-cols-2 gap-6 text-sm">
              {/* All form fields */}
              {[
                { name: "companyName", label: "Company Name" },
                { name: "priceBand", label: "Price Band" },
                { name: "open", label: "Open" },
                { name: "close", label: "Close" },
                { name: "issueSize", label: "Issue Size" },
                {
                  name: "issueType",
                  label: "Issue Type",
                  type: "select",
                  options: ["Book Built", "Fixed Price"],
                },
                { name: "listingDate", label: "Listing Date" },
                {
                  name: "status",
                  label: "Status",
                  type: "select",
                  options: ["Ongoing", "Coming", "New Listed"],
                },
                { name: "ipoPrice", label: "IPO Price" },
                { name: "listingPrice", label: "Listing Price" },
                { name: "listingGain", label: "Listing Gain" },
                { name: "listingDateListed", label: "Listing Date (Listed)" },
                { name: "cmp", label: "CMP" },
                { name: "currentReturn", label: "Current Return" },
                { name: "rhp", label: "RHP Link" },
                { name: "drhp", label: "DRHP Link" },
              ].map(({ name, label, type = "input", options }) => (
                <div key={name}>
                  <label className="block mb-1 font-medium">{label}</label>
                  {type === "select" ? (
                    <select
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2"
                    >
                      <option value="">Select {label}</option>
                      {options.map((opt) => (
                        <option value={opt} key={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : name === "listingDateListed" || name === "listingDate" ? (
                    <input
                      type="date"
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2"
                    />
                  ) : (
                    <input
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2"
                      placeholder={`Enter ${label}`}
                    />
                  )}

                </div>
              ))}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddIPOForm;
