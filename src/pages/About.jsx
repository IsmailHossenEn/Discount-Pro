import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-10">
        About Me
      </h1>

      {/* About Section */}
      <div className="bg-base-100 shadow-xl rounded-2xl p-6 md:p-10 mb-10">
        <p className="text-lg leading-relaxed text-gray-700">
          Hello! I’m <span className="font-semibold">Ismail Hossen Emon</span>,
          a passionate Frontend Developer with a strong interest in building
          clean, responsive, and user-friendly web applications. I enjoy
          converting ideas and designs into real-world applications using modern
          frontend technologies.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          I have hands-on experience with React and love working on projects
          that help me grow my problem-solving skills and understanding of
          real-world application flow.
        </p>
      </div>

      {/* Skills Section */}
      <div className="bg-base-100 shadow-xl rounded-2xl p-6 md:p-10 mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-6">
          My Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "DaisyUI",
            "Firebase Authentication",
            "React Router",
            "Git & GitHub",
            "Figma to Code",
            "Responsive Design",
          ].map((skill) => (
            <span
              key={skill}
              className="badge badge-outline badge-lg text-purple-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-base-100 shadow-xl rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-6">
          Projects
        </h2>

        <ul className="space-y-4 text-gray-700">
          <li>
            <span className="font-semibold">Discount PRO:</span> A coupon
            collecting application where users can browse and collect discount
            coupons from Bangladeshi e-commerce platforms.
          </li>
          <li>
            <span className="font-semibold">Dragon News Portal:</span> A news
            portal application built with React, featuring category-based news
            filtering and protected routes.
          </li>
          <li>
            <span className="font-semibold">Gym & Dental Websites:</span> Clean
            and responsive UI projects focusing on layout, accessibility, and
            modern design principles.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
