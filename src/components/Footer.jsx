import { FaGithub } from "react-icons/fa";

const Footer = () => {
    // const currentYear = new Date().getFullYear();
    const currentYear = "March 2025";
  
    return (
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          {/* Logo */}
          <div className="mb-5">
            <a href="https://github.com/Hebron1/food-country-react" className="text-5xl font-semibold flex justify-center">
              <span><FaGithub className="hover:text-gray-300" /></span>
              
            </a>
          </div>
  
          <p className="text-sm">
            &copy; {currentYear} @nama developer
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;