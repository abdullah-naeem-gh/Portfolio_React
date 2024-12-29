import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <GitHubActivity />
          <Contact />
        </main>
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-6">
          <div className="container mx-auto px-6 text-center">
            <p>© {new Date().getFullYear()} Abdullah Naeem. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;