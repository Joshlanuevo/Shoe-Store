interface FooterProps {
  // additional props
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-sm">Discover the latest trends in footwear at our shoe store. We offer a wide range of styles for every occasion.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm">123 Shoe Street, Cityville</p>
          <p className="text-sm">Email: info@shoestore.com</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe to our newsletter for updates on new arrivals and special offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 w-2/3 mr-2"
            />
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; 2023 Shoe Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
