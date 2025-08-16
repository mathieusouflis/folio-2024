import { useContext, useEffect } from "react";
import { Body, Display, Header2Semibold } from "../components/typography/typography";
import { CursorTextContext } from "../hooks/cursorProvider";

const About = () => {
    const { setText } = useContext(CursorTextContext);
    useEffect(() => {
        setText('')
        window.scrollTo(0, 0);
      }, []);

    return <>
        <div onMouseOver={() => setText("SCROLL")} onMouseOut={() => setText("")} className="min-h-screen flex items-center justify-center px-5 pt-[65px]">
            <Display className="text-center max-w-[1400px]">Designing & developing with passion to convey emotions through digital experiences</Display>
        </div>
        <div className="min-h-screen flex flex-col items-center justify-center px-5">
            <div className="w-full max-w-[926px] tablet:w-2/3 mobile:w-auto pb-96 grid desktop:grid-flow-col wilde:grid-flow-col tablet:grid-flow-row mobile:grid-flow-row gap-12">
                <img className="pt-16 desktop:sticky wilde:sticky tablet:static mobile:static desktop:w-fit top-0 w-full aspect-[10/15] object-cover" src="/assets/MathieuSouflis.png" alt="the most beautifull man (mathieu souflis)" />
                <div className="pt-16 flex flex-col gap-5 max-w-[453px] mobile:w-full tablet:max-w-full">
                    <Body className="leading-normal text-neutral-500">
                        <span className="font-semibold text-black">Passionate web developer</span>, curious and creative, I dive into the world of development and design every day. Currently a student at <span className="font-semibold text-black">HETIC (2024-2027)</span>, I am pursuing a <span className="font-semibold text-black">Bachelor's degree in Web Development</span> in Paris, where I have a strong thirst for learning. Prior to that, I had my <span className="font-semibold text-black">high school diploma at La Source (2022-2024)</span>.
                    </Body>
                    <Body className="leading-normal text-neutral-500">
                        With several professional experiences under my belt, I had the opportunity to work as an <span className="font-semibold text-black">observer intern at Redpelicans</span> and <span className="font-semibold text-black underline">soon as a freelancer</span>. These experiences have allowed me to gain a concrete understanding of the challenges in the professional world while fostering my sense of initiative and autonomy. Every mission is an opportunity for me to learn and deepen my skills.
                    </Body>
                    <Body className="leading-normal text-neutral-500">
                        Outside my passion for web development, I am a true enthusiast of <span className="font-semibold text-black">UI/UX design</span>, and I spend countless hours exploring the latest trends in the field. My interest in <span className="font-semibold text-black">innovation</span> is also fueled by my love for <span className="font-semibold text-black">music</span>: in 2024, I listened to over <span className="font-semibold text-black">152,000 minutes of music</span>, which allows me to escape and fuel my creativity.
                    </Body>
                    <Body className="leading-normal text-neutral-500">
                        I am also a <span className="font-semibold text-black">big consumer of technology</span>, always on the lookout for the latest trends to stay updated and refine my knowledge. Finally, my language skills include <span className="font-semibold text-black">French (native)</span>, <span className="font-semibold text-black">English (C1 level)</span>, and a bit of Spanish.
                    </Body>
                    <Body className="leading-normal text-neutral-500">
                        I believe that <span className="font-semibold text-black">innovation</span> is born at the intersection of <span className="font-semibold text-black">creativity</span>, <span className="font-semibold text-black">technology</span>, and <span className="font-semibold text-black">curiosity</span>. My goal is to combine these three elements to design web projects that are both aesthetically pleasing, functional, and cutting-edge. <span className="font-semibold text-black">Designing & developing with passion to create unforgettable digital experiences</span> is the philosophy that guides each of my projects, where every line of code and every design is crafted to provide an unforgettable digital experience.
                    </Body>
                </div>
            </div>
            <div className="w-full max-w-[926px] tablet:w-2/3 mobile:w-auto grid grid-flow-col gap-12 pb-28">
                <div className="flex flex-col gap-52">
                    <div className="flex flex-row gap-12">
                        <Header2Semibold>01</Header2Semibold>
                        <div className="flex flex-col gap-12">
                            <Header2Semibold className="uppercase">Experiences</Header2Semibold>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">Freelance_._Soon/Soon</Body>
                                    <Body className="uppercase">Soon...</Body>
                                    <Body className="uppercase text-neutral-500">Paris_/France</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">Renault_Digital_._2023/2023_(2Weeks)</Body>
                                    <Body className="uppercase">Observer intern</Body>
                                    <Body className="uppercase text-neutral-500">Paris_/France</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">Redpelicans._2022/2022_(1Week)</Body>
                                    <Body className="uppercase">Observer intern</Body>
                                    <Body className="uppercase text-neutral-500">Paris_/France</Body>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <Header2Semibold>02</Header2Semibold>
                        <div className="flex flex-col gap-12">
                            <Header2Semibold className="uppercase">Formation</Header2Semibold>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">HETIC_._2024/2027</Body>
                                    <Body className="uppercase">Bachelor development web</Body>
                                    <Body className="uppercase text-neutral-500">Paris_/France</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">La source._2022/2024</Body>
                                    <Body className="uppercase">Baccalauréat General</Body>
                                    <Body className="uppercase text-neutral-500">Paris_/France</Body>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <Header2Semibold>03</Header2Semibold>
                        <div className="flex flex-col gap-12">
                            <Header2Semibold className="uppercase">Skills</Header2Semibold>
                            <div className="flex flex-col gap-[20px]">
                                <Body className="uppercase">Figma</Body>
                                <Body className="uppercase">Javascript</Body>
                                <Body className="uppercase">ReactJs</Body>
                                <Body className="uppercase">ThreeJs - Basics</Body>
                                <Body className="uppercase">TailwindCSS</Body>
                                <Body className="uppercase">NodeJs</Body>
                                <Body className="uppercase">ExpressJs</Body>
                                <Body className="uppercase">Jwt</Body>
                                <Body className="uppercase">Prisma</Body>
                                <Body className="uppercase">SQL</Body>
                                <Body className="uppercase">Mongo - Basics</Body>
                                <Body className="uppercase">Python</Body>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <Header2Semibold>04</Header2Semibold>
                        <div className="flex flex-col gap-12">
                            <Header2Semibold className="uppercase">Soft Skills</Header2Semibold>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I take initiatives</Body>
                                    <Body className="uppercase">Autonomous</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I like diving deeper</Body>
                                    <Body className="uppercase">Passionate</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I enjoy learning new skills</Body>
                                    <Body className="uppercase">Curious</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I develop innovative ideas</Body>
                                    <Body className="uppercase">Creative</Body>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <Header2Semibold>05</Header2Semibold>
                        <div className="flex flex-col gap-12">
                            <Header2Semibold className="uppercase">Interest</Header2Semibold>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I am eating ui/ux posts</Body>
                                    <Body className="uppercase">Ui / Ux</Body>
                                    <Body className="uppercase text-neutral-500">And websites</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I am a huge consomator</Body>
                                    <Body className="uppercase">Music</Body>
                                    <Body className="uppercase text-neutral-500">152.000_Minutes_(2024)</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I stay updated</Body>
                                    <Body className="uppercase">Technology</Body>
                                    <Body className="uppercase text-neutral-500">Mwah</Body>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <Header2Semibold>06</Header2Semibold>
                        <div className="flex flex-col gap-12">
                            <Header2Semibold className="uppercase">Languages</Header2Semibold>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">Native</Body>
                                    <Body className="uppercase">French</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">C1 Grade</Body>
                                    <Body className="uppercase">English</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">A Bit</Body>
                                    <Body className="uppercase">Spanish</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">For the joke</Body>
                                    <Body className="uppercase">Javascript</Body>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
export default About;