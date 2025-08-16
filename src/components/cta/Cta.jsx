import { Link } from "react-router-dom";
import { Icon } from "../icons/icon";
import { LinkWithLoader } from "../loader/link-loader";
import { Body } from "../typography/typography";

const Cta = ({ URL = "", iconName = null, className, loader = true, children, ...props }) => {

    const body = <Body className={`text-base relative after:content-[''] after:w-0 after:h-px after:bg-neutral-900 after:absolute after:-bottom-[3px] after:left-0 hover:after:w-full after:transition-all after:ease-slow after:duration-[400ms] ${className ? className : ""}`}>{children}</Body>
    return (
        <>
            <div className="flex flex-row gap-[5px] items-center" {...props}>
                {iconName ? <Icon className="fill-neutral-900 mobile:hidden" name={iconName} /> : null}
                {loader ? <LinkWithLoader to={URL}>{body}</LinkWithLoader> : <Link to={URL} target="_blank">{body}</Link>}
            </div>
        </>
    );
}

export {Cta}
