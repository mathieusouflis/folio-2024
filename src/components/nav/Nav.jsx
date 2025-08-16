import Cta from "../cta/Cta";
import Icon from "../icons/Icon";
import LinkWithLoader from "../loader/LinkLoader";

const Nav = () => {
    return (
        <nav className="flex flex-row fixed justify-between p-5 w-full mix-blend-exclusion z-10">
            <LinkWithLoader to="/">
                <Icon name="mathieusouflis" className="mix-blend-normal"/>
            </LinkWithLoader>
            <div className="flex flex-row gap-[30px]">
                <Cta className="text-white after:bg-white"  URL="/">Home</Cta>
                {/* <Cta className="text-white after:bg-white" URL="/works">Works</Cta> */}
                <Cta className="text-white after:bg-white" URL="/about">About</Cta>
                <Cta className="text-white after:bg-white" URL="mailto:mathieu@souflis.fr" loader={false}>Contact</Cta>
            </div>
        </nav>
    );
}

export default Nav;