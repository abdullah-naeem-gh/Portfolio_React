import React from 'react';

const GitHubActivity = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">GitHub Contributions</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <img
            src="https://raw.githubusercontent.com/yourusername/yourusername/output/github-contribution-grid-snake.svg"
            alt="GitHub contribution grid snake animation"
            className="w-full"
          />
          <p className="mt-4 text-gray-600">
            Watch my contribution graph get eaten by the snake 🐍
          </p>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;