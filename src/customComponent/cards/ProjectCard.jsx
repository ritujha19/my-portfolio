import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/3d-card";

const ProjectCard = (props) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="flex flex-col md:flex-row gap-6 bg-gray-50 relative group/card dark:bg-black border rounded-xl p-6 w-220 h-auto">
        <div className="flex-1">
          <CardItem
            translateZ="20"
            className="text-3xl font-bold text-neutral-600 dark:text-white"
          >
            {props.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="25"
            className="text-neutral-500 text-lg max-w-sm mt-2 dark:text-neutral-300"
          >
            {props.description}
          </CardItem>
          <CardItem translateZ="25" className="mt-4">
            <h3 className="font-semibold text-xl mb-2">Features</h3>

            <ul className="list-disc pl-5 text-neutral-500 dark:text-neutral-300 space-y-1 text-lg">
              {props.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </CardItem>
          <CardItem translateZ="25" className="mt-4">
            <h3 className="font-semibold mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {props.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            <CardItem
              translateZ={20}
              as="a"
              href={props.demoLink}
              target="__blank"
              className="px-4 py-2 rounded-xl text-l font-normal dark:text-white"
            >
              live demo →
            </CardItem>
            <CardItem
              translateZ={20}
              as="a"
              href={props.githubLink}
              target="_blank"
              className="px-4 py-2 rounded-xl bg-white text-black font-bold"
            >
              GitHub
            </CardItem>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <CardItem translateZ="60" className="w-100 mt-4">
            <img
              src={props.thumbnail1}
              className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="first thumbnail"
            />
          </CardItem>
          <CardItem translateZ="60" className="w-100 mt-4">
            <img
              src={props.thumbnail2}
              className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="second thumbnail"
            />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
