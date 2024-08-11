import React from 'react';

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import img8 from '../assets/img8.jpg' ;
const About = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img8})` }}>
      <div className="w-full min-h-screen bg-gray-900 bg-opacity-70 p-6 md:p-12">
        {/* Developer Information Section */}
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Profile Image */}
          <div className="w-full md:w-1/3">
            <img
          
              alt="Profile"
              className="w-full h-full object-cover rounded-lg border-4 border-gray-200"
            />
          </div>

          {/* Developer Details */}
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About the Developer</h2>
            <p className="text-lg text-gray-800 mb-4">
              Hi, I'm Chetan Sharma, a passionate software developer with a love for creating innovative and user-friendly applications. With a background in full-stack development, I strive to build solutions that not only meet but exceed user expectations.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              My journey in tech started with a fascination for coding and problem-solving. Over the years, I've honed my skills in various technologies and frameworks, and I'm dedicated to continuous learning and growth in this ever-evolving field.
            </p>
            <h3 className="text-2xl font-semibold mt-6 text-gray-900">Education</h3>
            <p className="text-lg text-gray-800 mb-4">
              Bachelor of Technology in Computer Science from Harcourt Butler Technical University.
            </p>
            <p className="text-lg text-gray-800 mb-4">Specialized in software engineering, algorithms, and data structures.</p>
            <h3 className="text-2xl font-semibold mt-6 text-gray-900">Experience</h3>
            <p className="text-lg text-gray-800 mb-4">
              Over 2 years of experience in full-stack development, with a focus on building scalable and high-performance web applications. Worked on various projects including e-commerce platforms, content management systems, and mobile applications.
            </p>
            <div className="flex space-x-4 text-2xl text-gray-800 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Project Vision Section */}
        <div className="w-full max-w-4xl mx-auto mt-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Project Vision: Bookstore</h2>
          <p className="text-lg text-gray-800 mb-4">
            Our vision for the bookstore project is to create a comprehensive and user-friendly platform for book enthusiasts. This platform will provide an easy-to-navigate interface for browsing, searching, and managing a vast collection of books.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            We aim to integrate features such as user reviews, ratings, and recommendations to enhance the user experience. The goal is to foster a community where users can share their literary interests and discover new books seamlessly.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            By leveraging modern technologies and focusing on user feedback, we strive to continuously improve and adapt the platform to meet evolving needs and expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
