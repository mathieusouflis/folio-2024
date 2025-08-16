import { useEffect, useState } from "react";
import { Display } from "../typography/typography";
  
const RotatingText = () => {
    const [index, setIndex] = useState(0);
    const texts = [
        ['UX / UI', "Designer"],
        ['Fullstack', "Developer"],
        ["Creative", "Developer"],
    ];
    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const isTablet = window.innerWidth <= 768;

    return (
        <Display className="text-white text-center after:bg-white">
            <span className='text-indigo-400'>{texts[index][0]}</span>
            {isTablet ? <br /> : " "}
            {texts[index][1]}
        </Display>
    );

}

export default RotatingText