import { useState } from 'react';
import { Menu, X, ChevronDown, ExternalLink, LayoutGrid } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Bluestock Logo" className="h-8 w-auto" />
          <span className="font-bold text-xl text-gray-900 tracking-wide"></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="/ipo" className="hover:text-black">IPO</a>
          <a href="/community" className="hover:text-black">COMMUNITY</a>

          <div className="flex items-center gap-1 hover:text-black cursor-pointer">
            <span>PRODUCTS</span>
            <ChevronDown className="w-4 h-4" />
          </div>

          <div className="flex items-center gap-1 hover:text-black cursor-pointer">
            <span>BROKERS</span>
            <ExternalLink className="w-4 h-4" />
          </div>

          <a href="/live-news" className="hover:text-black flex items-center gap-1">
            LIVE NEWS
            <span className="text-[10px] font-semibold bg-blue-600 text-white px-1.5 py-[1px] rounded">NEW</span>
          </a>
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <button className="text-gray-600 hover:text-black">Sign In</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm font-semibold">
            Sign Up Now
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <LayoutGrid size={20} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-3 space-y-4 text-sm font-medium text-gray-700 bg-white shadow-md">
          <a href="/ipo" className="block">IPO</a>
          <a href="/community" className="block">COMMUNITY</a>
          <div className="flex items-center gap-1">
            <span>PRODUCTS</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-1">
            <span>BROKERS</span>
            <ExternalLink size={16} />
          </div>
          <a href="/live-news" className="block">
            LIVE NEWS
            <span className="ml-2 text-[10px] font-semibold bg-blue-600 text-white px-1.5 py-[1px] rounded">NEW</span>
          </a>
          <hr />
          <div className="flex flex-col gap-2">
            <button className="text-gray-600 hover:text-black text-left">Sign In</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold w-full">
              Sign Up Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
