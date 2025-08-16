import { useContext } from "react";
import { CursorTextContext } from "../../hooks/cursor-provider";
import { LinkWithLoader } from "../loader/link-loader";
import { Details, Header2 } from "../typography/typography";
import { Video } from "../video/Video";


const Project = ({
  number = 0,
  projectName = "Project Name",
  type = "type",
  videoUrl = "",
  year = 2000,
  className = "",
}) => {
  const { setText } = useContext(CursorTextContext);

  return (
    <LinkWithLoader
      to={`/works/${projectName.replaceAll(" ", "-").toLowerCase()}`}
      onMouseOver={() => setText("explore")}
      onMouseLeave={() => setText("")}
      className={`p-5 flex flex-row justify-between items-center w-full border border-neutral-200 border-x-0 group max-h-1/5 h-1/5 desktop:hover:h-full relative overflow-hidden transition-all duration-500 ${className}`}
    >
      <div className="flex flex-row tablet:gap-[200px] desktop:gap-[200px] mobile:gap-8 items-center">
        <Header2>{number >= 10 ? number : `0${number}`}</Header2>
        <Header2 className="uppercase">{projectName}</Header2>
      </div>
      <div className="h-2/3 w-auto aspect-[17/11] max-h-full relative opacity-0 desktop:group-hover:block desktop:group-hover:opacity-100 transition-all">
        {videoUrl.endsWith(".png") ? (
          <img src={videoUrl} />
        ) : (
          <Video
            url={videoUrl}
            className="absolute top-0 left-0 border border-neutral-900 pointer-events-none h-full w-full"
          />
        )}
      </div>
      <Details className="uppercase">
        {type.toUpperCase()} / {year}
      </Details>
    </LinkWithLoader>
  );
};

export { Project };
