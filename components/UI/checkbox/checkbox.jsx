import cls from './checkbox.module.scss'
import {useState} from "react";
import Link from "next/link";


const Checkbox = () => {
    const [checked, setChecked] = useState(false)
    const handleClick = () => {
        setChecked(!checked)
    }

    return (
        <label className={cls.label}>
            <input className={cls.input} checked={checked} onChange={handleClick} type="checkbox"/>
            <span className={cls.icon}>
                {
                    checked ?
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.07812 8.78906C4.17188 8.92969 4.3125 8.97656 4.5 8.97656C4.66406 8.97656 4.80469 8.92969 4.92188 8.78906L11.8359 1.89844C11.9297 1.80469 12 1.66406 12 1.47656C12 1.3125 11.9297 1.17188 11.8359 1.05469L10.9688 0.210938C10.8516 0.09375 10.7109 0.0234375 10.5469 0.0234375C10.3828 0.0234375 10.2422 0.09375 10.125 0.210938L4.5 5.83594L1.875 3.21094C1.73438 3.09375 1.59375 3.02344 1.42969 3.02344C1.26562 3.02344 1.125 3.09375 1.03125 3.21094L0.164062 4.05469C0.046875 4.17188 0 4.3125 0 4.47656C0 4.66406 0.046875 4.80469 0.164062 4.89844L4.07812 8.78906Z"
                                fill="white"/>
                        </svg>

                        : ''
                }
            </span>
            <span className={cls.text}>заполняя форму, вы даёте
            <Link href='/' className={cls.link}>согласие на обработку персональных данных</Link>
            </span>
        </label>
    );
};

export default Checkbox;