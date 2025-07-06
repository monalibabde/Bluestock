import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTelegramPlane,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 text-sm pt-10 px-6 border-t">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top 4 Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>Trading View</li>
              <li>NSE Holidays</li>
              <li>e-Voting CDSL</li>
              <li>e-Voting NSDL</li>
              <li>Market Timings</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>Careers</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Community</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Offerings</h3>
            <ul className="space-y-1">
              <li>Compare Broker</li>
              <li>Fin Calculators</li>
              <li>IPO</li>
              <li>All Brokers</li>
              <li>Products</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Policy</h3>
            <ul className="space-y-1">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Disclaimer</li>
              <li>Trust & Security</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 text-blue-500 text-lg">
          <FaTwitter />
          <FaFacebookF />
          <FaYoutube />
          <FaLinkedinIn />
          <FaInstagram />
          <FaTelegramPlane />
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Side: Logo + Details */}
          <div className="text-base space-y-3">
            {/* Larger logo and heading */}
            <div className="flex items-center space-x-8">
              <img src="/logo.png" alt="Bluestock" className="h-10" />
              <span className="font-bold text-lg"></span>
            </div>

            {/* Company Info */}
            <div className="space-y-0.5">
              <p className="text-[15px] font-medium">Bluestock Fintech</p>
              <p className="text-[15px] font-medium">Pune, Maharashtra</p>
            </div>

            {/* MSME Info */}
            <div className="text-sm">
              <p className="font-semibold">MSME Registration No:</p>
              <p>UDYAM-MH-01-v0138001</p>
            </div>

            {/* Startup India Logo */}
            <img
              src="/assets/startupindia.jpg"
              alt="Startup India"
              className="h-32"
            />

          </div>


          {/* Right Side: Disclaimers */}
          <div className="text-xs text-gray-600 leading-relaxed max-w-3xl">
            <p>
              Investment in securities markets are subject to market risks, read all the related documents carefully
              before investing as prescribed by SEBI. Issued in the interest of the investors.
            </p>
            <p className="mt-2">
              The users can write to <a href="mailto:hello@bluestock.in" className="text-blue-600">hello@bluestock.in</a> for any app, website related queries.
              Also you can send IT / Tech related feedback to <a href="mailto:cto@bluestock.in" className="text-blue-600">cto@bluestock.in</a>
            </p>
            <p className="mt-2">
              Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock
              recommendations, buy/ sell stock tips, or investment and trading advice. All the stock scripts shown in the
              Bluestock app, website, all social media handles are for educational purposes only.
            </p>
            <p className="mt-2">
              Before making any investment in the financial market, it is advisable to consult with your financial advisor.
              Remember that stock markets are subject to market risks.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 w-full mt-6" />

        {/* Bottom Line */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>Bluestock Fintech All Rights Reserved.</p>
          <p>
            Made with <span className="text-red-500">❤</span> in Pune, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
