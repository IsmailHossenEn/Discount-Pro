import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-8">
          <div className="animate__animated animate__fadeInLeft w-full md:w-auto text-center md:text-left">
            <h2 className="text-2xl font-bold text-purple-900">
              <img
                className="w-50"
                src="https://res.cloudinary.com/dn9bladxx/image/upload/v1767437987/disproLogo-removebg-preview_gcql9z.png"
                alt=""
              />
            </h2>
            <p className="text-gray-500 mt-2 max-w-xs">
              Your ultimate destination for the best deals and coupons online.
              Save big, shop smart.
            </p>
          </div>

          <div className="animate__animated animate__fadeInUp flex flex-col items-center gap-4">
            <h3 className="text-gray-800 font-semibold uppercase tracking-wider text-sm">
              Follow the Pro
            </h3>
            <div className="flex gap-6 text-2xl">
              <a
                href="https://github.com/IsmailHossenEn"
                target="_blank"
                className="text-gray-400 hover:text-purple-700 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ismail-hossen-emon1998/"
                target="_blank"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-sky-500 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-blue-700 transition-colors"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight w-full md:w-auto text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-2">
              <HiOutlineMail className="text-orange-500" />
              <span>support@discountpro.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <HiOutlineLocationMarker className="text-orange-500" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-100" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p className="animate__animated animate__fadeIn">
            © {currentYear}
            <span className="font-semibold text-purple-900">Discount Pro</span>.
            All rights reserved.
          </p>
          <p className="animate__animated animate__fadeIn">
            Designed with ❤️ by
            <a
              href="#"
              className="ml-1 text-orange-500 hover:underline font-medium"
            >
              Ismail Hossen Emon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
