import { useContext } from "react";
import { Body, BodySemibold, Display } from "../components/typography/typography.jsx";
import { CursorTextContext } from "../hooks/cursor-provider.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Video } from "../components/video/video.jsx";
import { Cta } from "../components/cta/cta.jsx";
import { LinkWithLoader } from "../components/loader/link-loader.jsx";
import projectsData from '../data/projects-data.json';

const DescriptionElement = ({ title, content, className }) => {
  return (
    <div className={`flex flex-col gap-[5px] ${className ? className : ""}`}>
      <BodySemibold>{title.toUpperCase()}</BodySemibold>
      <div className="flex flex-row gap-[5px] w-4/5 max-w-[550px]">
        {content.map((content, index) => (
          <Body key={index}>{content}</Body>
        ))}
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const { setText } = useContext(CursorTextContext);
  const { projectId } = useParams();
  const project = projectsData[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
    setText("");
  }, [projectId]);
  const nextProject = projectsData[project.next];

  if (!project) {
    return <div>Project not found</div>; // REDIRECT TO 404 PAGE
  }

  return (
    <>
      <div
        onMouseOver={(e) => {
          if (!e.target.closest(".cta")) setText("SCROLL");
        }}
        onMouseOut={(e) => {
          if (!e.target.closest(".cta")) setText("");
        }}
        className="flex flex-col gap-[30px] min-h-screen px-5"
      >
        <div className="py-5 pt-[85px]">
          <Display>{project.title}</Display>
          <div className="flex flex-row tablet:flex-col mobile:flex-col w-full gap-5">
            {project.cover.endsWith(".png") ? (
              <img
                className="border border-neutral-900 pointer-events-none w-[55%] h-fit mobile:w-auto tablet:w-auto aspect-[17/11]"
                src={project.cover}
              />
            ) : (
              <Video
                className="border border-neutral-900 pointer-events-none w-[55%] h-fit mobile:w-auto tablet:w-auto aspect-[17/11]"
                url={project.cover}
              />
            )}
            <div className="flex flex-col gap-8 justify-between">
              <div className="flex flex-col gap-5">
                {project?.date >= 0 && (
                  <DescriptionElement title="Date" content={[project.date]} />
                )}
                {project?.description !== "" && (
                  <DescriptionElement
                    title="Description"
                    content={[project.description]}
                  />
                )}
                {project?.types.length > 0 && (
                  <DescriptionElement
                    title="Types"
                    content={[project.types.join(" - ")]}
                  />
                )}
                {project?.technologies.length > 0 && (
                  <DescriptionElement
                    title="Tech"
                    content={project.technologies}
                  />
                )}
                {project?.collaborators.length > 0 && (
                  <DescriptionElement
                    title="Collaboration"
                    content={project.collaborators}
                  />
                )}
                {project?.status !== "" && (
                  <DescriptionElement
                    title="Status"
                    content={[project.status]}
                  />
                )}
              </div>
              {project?.url !== "" && (
                <Cta
                  URL={project.url}
                  loader={false}
                  onMouseOver={() => setText("")}
                  className="relative font-semibold cta"
                >
                  Visit Website
                </Cta>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="project-images flex flex-col gap-[200px] py-36 items-center">
        {project.images.map((image, index) => {
          const url = image[1];
          const label = image[0];
          return (
            <div key={index} className="w-3/5 gap-[10px] flex flex-col">
              {url.startsWith("https://player.vimeo.com/") ? (
                <Video
                  className="border border-neutral-900 aspect-[17/11]"
                  url={url}
                />
              ) : (
                <img
                  className="border border-neutral-900"
                  src={url}
                  alt={label}
                />
              )}
              <Body>
                {index + 1 < 10 ? `0${index + 1}/` : `${index + 1}/`} {label}
              </Body>
            </div>
          );
        })}
      </div>
      <LinkWithLoader
        onMouseOver={() => setText("EXPLORE")}
        onMouseOut={() => setText("")}
        className="h-screen relative"
        to={`/works/${project.next}`}
      >
        <Display className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 z-10 text-white">
          Next Project
        </Display>
        {nextProject.cover.startsWith("https://player.vimeo.com/") ? (
          <div className="relative h-screen overflow-hidden">
            <Video
              className="absolute top-1/2 left-1/2 desktop:w-full  mobile:h-full tablet:h-full mobile:w-auto tablet:w-auto aspect-[17/11] object-cover transform -translate-x-1/2 -translate-y-1/2 brightness-75"
              url={nextProject.cover}
            />
          </div>
        ) : (
          <img
            className="border border-neutral-900 h-full"
            src={nextProject.cover}
          />
        )}
      </LinkWithLoader>
    </>
  );
};

export { ProjectPage };
