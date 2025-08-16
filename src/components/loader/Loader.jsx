import { useEffect, useState, useRef, useContext } from "react";
import { Display } from "../typography/typography";
import { LoaderContext } from "../../hooks/loaderProvider";
import { useSearchParams } from "react-router-dom";

const Loader = () => {
    const [position, setPosition] = useState(false);
    const { navigateStatus } = useContext(LoaderContext);
    const [queryParameters] = useSearchParams();
    const business_name = queryParameters.get("business_name");
    const normalTexts = ["486", "sapalyuk", "I love you", "v11", "v11"];
    const businessTexts = [business_name, "welcome", "to", "my", "portfolio.", "Have", "fun", "✨", "✨"];
    const texts = business_name ? businessTexts : normalTexts;
    const intervalDuration = business_name ? 500 : 300;
    const i = useRef(0);
    const [text, setText] = useState(texts[0]);
    const [businessTextDisplayed, setBusinessTextDisplayed] = useState(false);

    const resetLoader = () => {
        setText(normalTexts[0]);
        setPosition(false);
        i.current = 0;
        setBusinessTextDisplayed(false);
    };

    useEffect(() => {
        let interval;
        if (!navigateStatus) {
            interval = setInterval(() => {
                if (business_name && !businessTextDisplayed) {
                    setText(businessTexts[i.current]);
                    if (i.current === businessTexts.length - 1) {
                        setBusinessTextDisplayed(true);
                        setPosition(true);
                        clearInterval(interval);
                    } else {
                        i.current = i.current + 1;
                    }
                } else if (!business_name) {
                    setText(normalTexts[i.current]);
                    if (i.current === normalTexts.length - 1) {
                        setPosition(true);
                        clearInterval(interval);
                    } else {
                        i.current = i.current + 1;
                    }
                }
            }, intervalDuration);
        }
        return () => clearInterval(interval);
    }, [navigateStatus, businessTextDisplayed, business_name]);

    useEffect(() => {
        if (navigateStatus) {
            resetLoader();
        }
    }, [navigateStatus]);

    return (
        <div className={`z-[10000] fixed top-0 left-0 w-full h-full justify-center items-center flex bg-neutral-900 transition-all duration-1000 ease-slow ${position === true ? 'transform -translate-y-[100%]' : ''}`}>
            <Display className="text-white uppercase">{text}</Display>
        </div>
    );
}

export default Loader;
