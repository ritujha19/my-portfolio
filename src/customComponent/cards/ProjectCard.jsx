import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/3d-card";

const ProjectCard = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="flex flex-col md:flex-row gap-6 bg-gray-50 relative group/card dark:bg-black border rounded-xl p-6 w-220 h-auto">
        <div className="flex-1">
          <CardItem
            translateZ="20"
            className="text-3xl font-bold text-neutral-600 dark:text-white"
          >
            StayYatra
          </CardItem>
          <CardItem
            as="p"
            translateZ="25"
            className="text-neutral-500 text-l max-w-sm mt-2 dark:text-neutral-300"
          >
            StayYatra is a full stack travel booking application that allows
            users to register, login and book hotels.
            <br/> 
            <strong className="semi-bold">note:</strong> It is a backend-focused demo project inspired by Airbnb, created while learning backend development.
          </CardItem>
          <CardItem translateZ="25" className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Features</h3>

            <ul className="list-disc pl-5 text-neutral-500 dark:text-neutral-300 space-y-1">
              <li>User authentication</li>
              <li>Session management</li>
              <li>Hotel booking system</li>
              <li>Booking history</li>
              <li>Responsive design</li>
              <li>Database storage</li>
            </ul>
          </CardItem>
          <CardItem translateZ="25" className="mt-4">
            <h3 className="font-semibold mb-2">Tech Stack</h3>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm">
                Node.js
              </span>

              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm">
                Express
              </span>

              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm">
                MongoDB
              </span>

              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm">
                Bootstrap
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm">
                EJS
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm">
                Joi
              </span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm">
                REST API
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm">
                Passport.js
              </span>
            </div>
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            <CardItem
              translateZ={20}
              as="a"
              href="https://stayyatra.onrender.com/"
              target="__blank"
              className="px-4 py-2 rounded-xl text-l font-normal dark:text-white"
            >
              live demo →
            </CardItem>
            <CardItem
              translateZ={20}
              as="a"
              href="https://github.com/ritujha19/StayYatra.git"
              target="_blank"
              className="px-4 py-2 rounded-xl bg-white text-black font-bold"
            >
              GitHub
            </CardItem>
          </div>
        </div>
        <div className="flex-1 flex-col">
          <CardItem translateZ="60" className="w-full mt-4">
            <img
              src="/Screenshot 1.png"
              className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem translateZ="60" className="w-full mt-4">
            <img
              src="/Screenshot 2.png"
              className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
