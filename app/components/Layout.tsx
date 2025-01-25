import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center text-xl font-bold text-gray-800 dark:text-white">
                Your Name
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Home
              </Link>
              <Link href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Projects
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout; 