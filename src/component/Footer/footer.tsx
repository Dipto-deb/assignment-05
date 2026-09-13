
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-sm">
              DS
            </div>
            <h3 className="text-lg font-bold">
              Dev <span className="text-pink-500">Stack</span>
            </h3>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-sm text-gray-600">
            <a href="https://github.com/Dipto-deb" target="_blank" rel="noreferrer" className="hover:text-gray-900">
              GitHub
            </a>
            <a href="#" className="hover:text-gray-900">Twitter</a>
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </div>

       
    </footer>
  );
};

export default Footer;