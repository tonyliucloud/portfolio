import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
        
        <h1 className="text-5xl font-bold text-gray-900">
          Hi, I'm <span className="text-blue-500">Your Name</span> 🚀
        </h1>
        <p className="text-lg text-gray-700 max-w-lg">
          A passionate web developer building modern web applications with
          Next.js and TailwindCSS.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          View My Projects
        </a>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50 w-full text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-700">
            I'm a web developer with a passion for building fast, responsive, and
            modern web applications. I love working with Next.js, TailwindCSS, and
            TypeScript.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white w-full text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Project 1 */}
            <div className="p-6 border rounded-lg shadow-md bg-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800">Project One</h3>
              <p className="text-gray-600 mt-2">
                A brief description of this project and the technologies used.
              </p>
              <a href="#" className="text-blue-500 font-semibold mt-4 inline-block">
                View Project →
              </a>
            </div>

            {/* Project 2 */}
            <div className="p-6 border rounded-lg shadow-md bg-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800">Project Two</h3>
              <p className="text-gray-600 mt-2">
                A brief description of this project and the technologies used.
              </p>
              <a href="#" className="text-blue-500 font-semibold mt-4 inline-block">
                View Project →
              </a>
            </div>

            {/* Project 3 */}
            <div className="p-6 border rounded-lg shadow-md bg-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800">Project Three</h3>
              <p className="text-gray-600 mt-2">
                A brief description of this project and the technologies used.
              </p>
              <a href="#" className="text-blue-500 font-semibold mt-4 inline-block">
                View Project →
              </a>
            </div>

            {/* Project 4 */}
            <div className="p-6 border rounded-lg shadow-md bg-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800">Project Four</h3>
              <p className="text-gray-600 mt-2">
                A brief description of this project and the technologies used.
              </p>
              <a href="#" className="text-blue-500 font-semibold mt-4 inline-block">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="py-20 bg-gray-50 w-full text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900">Contact Me</h2>
          <p className="mt-4 text-gray-700">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>

          {/* Contact Links */}
          <div className="mt-6 flex justify-center space-x-6">
            <a href="mailto:youremail@example.com" className="text-gray-700 hover:text-blue-500">
              📧 Email
            </a>
            <a href="https://github.com/yourusername" target="_blank" className="text-gray-700 hover:text-blue-500">
              🐙 GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-gray-700 hover:text-blue-500">
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-800 text-white text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>

          {/* Footer Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
