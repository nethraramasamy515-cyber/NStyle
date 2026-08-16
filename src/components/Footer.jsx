
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-purple-500">
            NStyle
          </h2>

          <p className="mt-4 text-gray-400">
            Premium Fashion Store for Men & Women.
            Discover the latest trends with AI-powered shopping.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Quick Links
          </h3>

          <div className="space-y-2">
            <Link
              to="/"
              className="block hover:text-purple-400"
            >
              Home
            </Link>

            <Link
              to="/shop"
              className="block hover:text-purple-400"
            >
              Shop
            </Link>

            <Link
              to="/profile"
              className="block hover:text-purple-400"
            >
              Profile
            </Link>

            <Link
              to="/orders"
              className="block hover:text-purple-400"
            >
              Orders
            </Link>
          </div>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Customer Care
          </h3>

          <div className="space-y-3 text-gray-400">

            <p>
              📧 nethrait15@gmail.com
            </p>

            <p>
              📞 9894072122
            </p>

            <p>
              💬 Have questions or need help?
            </p>

            <p>
              Our NStyle support team is here to help you.
            </p>

          </div>
        </div>

      
{/* Social */}
<div>
  <h3 className="text-xl font-bold mb-4">
    Follow Us
  </h3>

  <div className="flex gap-5 text-3xl">

    {/* Facebook */}
    <a
     href="https://www.facebook.com/profile.php?id=61592743635519"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
    </a>

    {/* Instagram */}
    <a
     href="https://www.instagram.com/ns_sparkly__0222/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/nethra-ramasamy-12a064329/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/nethraramasamy515-cyber/NStyle"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FaGithub className="hover:text-gray-400 cursor-pointer transition" />
    </a>

  </div>
</div>


       

      </div>

      <hr className="border-gray-700 my-10" />

      <p className="text-center text-gray-500">
        © 2026 NStyle. All Rights Reserved.
      </p>

    </footer>
  );
}


export default Footer;
