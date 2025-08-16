const Display = ({ className, children }) => {
    return <h1 className={`font-practical font-thin desktop:text-8xl wilde:text-8xl tablet:text-6xl mobile:text-5xl uppercase ${className ? className : ''}`}>{children}</h1>;
};


const Header1 = ({ className, children }) => {
    return <h2 className={`font-geist leading-none mt-trim-tight mb-trim-loose desktop:text-[64px] mobile:text-5xl tablet:text-6xl ${className ? className : ''}`}>{children}</h2>;
};

const Header2 = ({ className, children }) => {
    return <h2 className={`font-geist leading-none mt-trim-tight mb-trim-loose tablet:text-[24px] desktop:text-[24px] mobile:text-xl ${className ? className : ''}`}>{children}</h2>;
};
const Header2Semibold = ({ className, children }) => {
    return <h2 className={`font-geist leading-none mt-trim-tight mb-trim-loose tablet:text-[24px] desktop:text-[24px] mobile:text-xl font-sm ${className ? className : ''}`}>{children}</h2>;
};

const Body = ({ className, children }) => {
    return <p className={`font-geist leading-none text-[15px] ${className ? className : ''}`}>{children}</p>;
};
const BodySemibold = ({ className, children }) => {
    return <p className={`font-geist leading-none text-[15px] font-semibold ${className ? className : ''}`}>{children}</p>;
};

const Details = ({ className, children }) => {
    return <p className={`font-geist leading-none mt-trim-tight mb-trim-loose text-[13px] ${className ? className : ''}`}>{children}</p>;
}
const DetailsSemibold = ({ className, children }) => {
    return <p className={`font-geist leading-none mt-trim-tight mb-trim-loose text-[13px] font-sm ${className ? className : ''}`}>{children}</p>;

}


export { Display, Header1, Header2, Header2Semibold, Body, BodySemibold, Details, DetailsSemibold };
