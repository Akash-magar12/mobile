import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { SiShopee } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-10">
      <div className="container mx-auto px-5">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-white font-semibold text-2xl">
                <SiShopee />
              </span>
            </div>
            <p>
              Crafting innovative phone cases, watch straps, and accessories to elevate your mobile experience.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaGithub size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-2/3 flex flex-wrap justify-between">
            {/* Solutions */}
            <div className="w-1/2 md:w-1/4 mb-6">
              <h3 className="text-white font-semibold mb-3">Solutions</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-400">
                    Marketing
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-400">
                    Analytics
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-400">
                    Automation
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-400">
                    Commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Insights
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="w-1/2 md:w-1/4 mb-6">
              <h3 className="text-white font-semibold mb-3">Support</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-400">
                    Submit ticket
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-400">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Guides
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="w-1/2 md:w-1/4 mb-6">
              <h3 className="text-white font-semibold mb-3">Company</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-400">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-400">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-400">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="w-1/2 md:w-1/4 mb-6">
              <h3 className="text-white font-semibold mb-3">Legal</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-400">
                    Terms of service
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-400">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p>© 2024 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
