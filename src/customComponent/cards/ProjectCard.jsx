import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../components/3d-card";

const ProjectCard = (props) => {
  return (
    <CardContainer
      className="inter-var w-full max-w-6xl mx-auto"
      containerClassName="w-full py-4"
    >
      <CardBody
        className="flex flex-col md:flex-row items-start gap-6 md:gap-8
        bg-gray-50 dark:bg-black border border-neutral-300 dark:border-neutral-700
        rounded-xl p-5 sm:p-6 md:p-8 w-full h-auto min-w-0"
      >
        {/* Project details */}
        <div className="flex-1 min-w-0 w-full">
          <CardItem
            translateZ={10}
            className="text-2xl sm:text-3xl font-bold
            text-neutral-800 dark:text-white wrap-break-word"
          >
            {props.title}
          </CardItem>

          <CardItem
            as="p"
            translateZ={10}
            className="text-sm sm:text-base text-neutral-500
            dark:text-neutral-300 mt-3 leading-relaxed wrap-break-word"
          >
            {props.description}
          </CardItem>

          {/* Features */}
          <CardItem translateZ={10} className="mt-5 w-full">
            <h3 className="font-semibold text-lg mb-2 text-neutral-800 dark:text-white">
              Features
            </h3>

            <ul className="list-disc pl-5 text-sm sm:text-base
            text-neutral-600 dark:text-neutral-300 space-y-2
            leading-relaxed wrap-break-word">
              {props.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </CardItem>

          {/* Tech Stack */}
          <CardItem translateZ={10} className="mt-5 w-full">
            <h3 className="font-semibold text-lg mb-3 text-neutral-800 dark:text-white">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {props.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex max-w-full items-center
                  rounded-lg bg-gray-200 dark:bg-gray-800
                  px-3 py-1.5 text-xs sm:text-sm
                  text-neutral-800 dark:text-neutral-200
                  wrap-break-word"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardItem>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-6 w-full">
            {props.demoLink && (
              <CardItem translateZ={5} className="max-w-full">
                <a
                  href={props.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center
                  gap-2 rounded-lg border border-neutral-300
                  dark:border-neutral-700 px-4 py-2.5
                  text-sm font-medium text-neutral-800
                  dark:text-white hover:bg-neutral-100
                  dark:hover:bg-neutral-900 transition-colors
                  whitespace-nowrap"
                >
                  Live Demo <span aria-hidden="true">↗</span>
                </a>
              </CardItem>
            )}

            {props.demoVideo && (
              <CardItem translateZ={5} className="max-w-full">
                <a
                  href={props.demoVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center
                  gap-2 rounded-lg border border-neutral-300
                  dark:border-neutral-700 px-4 py-2.5
                  text-sm font-medium text-neutral-800
                  dark:text-white hover:bg-neutral-100
                  dark:hover:bg-neutral-900 transition-colors
                  whitespace-nowrap"
                >
                  Watch Demo <span aria-hidden="true">↗</span>
                </a>
              </CardItem>
            )}

            {props.githubLink && (
              <CardItem translateZ={5} className="max-w-full">
                <a
                  href={props.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center
                  rounded-lg bg-neutral-900 dark:bg-white
                  px-5 py-2.5 text-sm font-semibold
                  text-white dark:text-black
                  hover:opacity-80 transition-opacity whitespace-nowrap"
                >
                  GitHub <span className="ml-2" aria-hidden="true">↗</span>
                </a>
              </CardItem>
            )}
          </div>
        </div>

        {/* Project screenshots */}
        {props.images?.length > 0 && (
          <div className="flex flex-col gap-4 w-full md:w-[42%]
          md:max-w-md shrink-0 mt-2 md:mt-0">
            {props.images.map((img, index) => (
              <CardItem
                key={index}
                translateZ={15}
                className="w-full"
              >
                <img
                  src={img}
                  alt={`${props.title} screenshot ${index + 1}`}
                  loading="lazy"
                  className="block w-full aspect-video object-contain
                  rounded-xl border border-neutral-200
                  dark:border-neutral-800 bg-neutral-100
                  dark:bg-neutral-900"
                />
              </CardItem>
            ))}
          </div>
        )}
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;