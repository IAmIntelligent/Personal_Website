import React from 'react';

const Home= () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              A full-stack developer with expertise in web development using modern technologies and frameworks. I have a passion for creating innovative and user-friendly applications that deliver a seamless user experience. With a strong problem-solving mindset and excellent communication skills, I thrive in collaborative environments and enjoy taking on new challenges.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Frontend Development: HTML, CSS, JavaScript, React</li>
              <li>Backend Development: Node.js, Express, MongoDB</li>
              <li>Database: SQL, MongoDB</li>
              <li>Version Control: Git, GitHub</li>
              <li>Deployment: Heroku, Netlify</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
