const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          {/* Logo */}
          <div className="mb-2">
            <a href="#" className="text-3xl font-semibold">
              <span>Logo</span>
            </a>
          </div>
  
          {/* @nama developer dan tahun dibuat */}
          <p className="text-sm">
            &copy; {currentYear} @nama developer
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;