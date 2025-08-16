import { useEffect, useContext } from "react";
import { CursorTextContext } from "../../hooks/cursor-provider";
import { Details } from "../typography/typography";

const FollowCursor = () => {
  const { text } = useContext(CursorTextContext);

  const onMouseMove = (e) => {
    const cursorElement = document.querySelector('.cursor');
    if (cursorElement) {
      cursorElement.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className={`cursor mobile:hidden tablet:hidden desktop:block z-50 fixed box-content flex items-center justify-center min-w-3 min-h-3 aspect-square rounded-full border border-white pointer-events-none mix-blend-exclusion transition-all duration-[300ms] ease-slow ${text ? 'w-24 h-24' : 'w-3 h-3'}`}
    >
      <div className="relative w-full h-full overflow-hidden box-content">
        <Details className="text-white absolute inset-0 flex items-center justify-center uppercase">{text}</Details>
      </div>
    </div>
  );
}

export {FollowCursor};
