import cls from './button.module.scss'


const Button= ({children, onClick}) => {
    return (
        <button onClick={onClick} className={cls.button}>
            {children}
        </button>
    );
};

export default Button;