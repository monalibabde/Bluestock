import { useState, useMemo } from 'react';
import IPOCard from '../components/IPOCard';
import SearchBar from '../components/SearchBar';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ipoList from '../data/ipos.json';

const Home = () => {
  const [search, setSearch] = useState('');

  const filteredIPOs = useMemo(() => {
    return ipoList
      .map(ipo => ({
        ...ipo,
        rhpLink: ipo.rhp,
        drhpLink: ipo.drhp
      }))
      .filter(ipo =>
        ipo.company.toLowerCase().includes(search.toLowerCase())
      );
  }, [search]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        {/* IPO Cards */}
        {filteredIPOs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIPOs.map(ipo => (
              <IPOCard key={ipo.id} ipo={ipo} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-12">
            No IPOs match your search criteria.
          </p>
        )}

        {/* FAQ Section */}
        <div className="mt-16">
          <FAQSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
