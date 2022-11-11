import cls from './header.module.scss'
import NavBar from "../navBar/navBar";
import Link from "next/link";


const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.flex}>
                <Link className={cls.logo} href='/'>LOGO</Link>
                <NavBar/>
            </div>
        </header>
    );
};

export default Header;