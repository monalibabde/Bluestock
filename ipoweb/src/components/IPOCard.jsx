const IPOCard = ({ ipo }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition">
      {/* Top section: Logo + Name */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={ipo.logo}
          alt={ipo.company}
          className="h-10 w-10 object-contain"
        />
        <h2 className="text-lg font-semibold text-indigo-700">{ipo.company}</h2>
      </div>

      {/* Details */}
      <div className="text-sm text-gray-800 grid grid-cols-3 gap-y-2 gap-x-4 mb-4">
        <p>
          <span className="font-medium text-gray-500">PRICE BAND</span><br />
          <span className="font-semibold">{ipo.priceBand || 'Not Issued'}</span>
        </p>
        <p>
          <span className="font-medium text-gray-500">OPEN</span><br />
          <span className="font-semibold">{ipo.open || 'Not Issued'}</span>
        </p>
        <p>
          <span className="font-medium text-gray-500">CLOSE</span><br />
          <span className="font-semibold">{ipo.close || 'Not Issued'}</span>
        </p>
        <p>
          <span className="font-medium text-gray-500">ISSUE SIZE</span><br />
          <span className="font-semibold">{ipo.issueSize || 'Not Issued'}</span>
        </p>
        <p>
          <span className="font-medium text-gray-500">ISSUE TYPE</span><br />
          <span className="font-semibold">{ipo.issueType || 'Book Built'}</span>
        </p>
        <p>
          <span className="font-medium text-gray-500">LISTING DATE</span><br />
          <span className="font-semibold">{ipo.listingDate || 'Not Issued'}</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href={ipo.rhpLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-indigo-500 text-indigo-500 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-indigo-50 transition"
        >
          RHP
        </a>
        <a
          href={ipo.drhpLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-red-600 transition"
        >
          DRHP
        </a>
      </div>
    </div>
  );
};

export default IPOCard;
