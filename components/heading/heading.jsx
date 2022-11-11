import cls from './heading.module.scss'


const Heading = ({children}) => {
    return (
        <>
            <h1 className={cls.heading}>{children}</h1>
        </>
    );
};

export default Heading;