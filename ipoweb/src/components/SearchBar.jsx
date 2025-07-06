const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="w-full mb-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
        <span className="text-blue-600 font-medium cursor-pointer">Bluestock</span>
        {' > '}
        <span className="text-blue-600 font-medium cursor-pointer">IPO</span>
        {' > '}
        <span className="font-medium text-black">UPCOMING IPO</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-black mb-1">Upcoming IPO</h1>

      {/* Subtitle */}
      <p className="text-sm text-gray-600 mb-4">
        Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.
      </p>

    </div>
  );
};

export default SearchBar;
