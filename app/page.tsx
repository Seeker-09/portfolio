import Layout from './components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Hi, I'm Your Name
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-100 sm:text-2xl md:mt-5 md:max-w-3xl">
              Full Stack Developer passionate about building web applications
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project Name</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Description of your amazing project goes here.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">React</span>
                  <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">Node.js</span>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Write a compelling bio about yourself, your journey, and your expertise.
              Share what makes you unique and what you bring to the table.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Get In Touch
          </h2>
          <div className="max-w-lg mx-auto">
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                LinkedIn
              </a>
              <a href="mailto:your.email@example.com"
                 className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
