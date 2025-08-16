import { useContext } from "react";
import { CursorTextContext } from "../hooks/cursor-provider";
import { useEffect } from "react";
import { Body } from "../components/typography/typography";

const Legal = () => {
  const { setText } = useContext(CursorTextContext);

  useEffect(() => {
    setText("");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex h-screen justify-center items-center">
      <Body>© All rights reserved (2024)</Body>
    </div>
  );
};

export { Legal };
