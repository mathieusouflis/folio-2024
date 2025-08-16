import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoaderContext } from '../../hooks/loaderProvider';

const LinkWithLoader = ({ to, className="", children, ...props }) => {
    const {setNavigateStatus} = useContext(LoaderContext);
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        setNavigateStatus(true);
        setTimeout(() => {
            setNavigateStatus(false);
            navigate(to);
        }, 1000);
    };

    return (
        <>
            <a href={to} className={`cursor-pointer ${className}`} onClick={handleClick} {...props}>
                {children}
            </a>
        </>
    );
};

export default LinkWithLoader;