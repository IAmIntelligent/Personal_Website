import React from "react";

const Portfolio=() => {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor eros vel libero consectetur sodales.",
      image: "/images/project1.jpg",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project 2",
      description:
        "Sed euismod urna sed sapien imperdiet, vitae pulvinar erat commodo. Proin vel scelerisque sapien.",
      image: "/images/project2.jpg",
      tags: ["Angular", "Express", "MySQL"],
    },
    // Add more projects as needed
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Portfolio</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 rounded-full py-1 px-2 text-sm mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
