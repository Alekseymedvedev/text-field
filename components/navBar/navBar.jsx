import React, {useState} from 'react';
import cls from "./navBar.module.scss";
import Link from "next/link";
import {useRouter} from "next/router";


const localState = [
    {id: 1, name: 'О бренде', path: '/'},
    {id: 2, name: 'ответственность', path: '/responsibility'},
    {id: 3, name: 'где купить', path: '/buy'},
    {id: 4, name: 'поддержка', path: '/support'},
    {id: 5, name: 'контакты', path: '/contacts'},
    {id: 6, name: 'Сотрудничество', path: '/cooperation'},
]

const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false)

    const router = useRouter()

    return (
        <>
            <button
                onClick={() => {
                    setMenuActive(!menuActive)
                }}
                className={cls.menuBtn}
            >
                {
                    !menuActive ?
                        <svg id="icon-menu" viewBox="0 0 32 32">
                            <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
                        </svg>
                        :
                        <svg id="icon-cross" viewBox="0 0 32 32">
                            <path
                                d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
                        </svg>
                }

            </button>
            <nav className={menuActive ? cls.nav + ' ' + cls.active : cls.nav}>

                <ul className={cls.flex}>
                    {
                        localState && localState.map(item =>
                            <li className={cls.listItem} key={item.id}>
                                <Link
                                    className={router.pathname === item.path ? cls.link + ' ' + cls.active : cls.link}
                                    href={item.path}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </>
    );
};

export default NavBar;