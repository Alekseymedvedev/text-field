import cls from './phone.module.scss'
import Link from "next/link";

const Phone = ({text}) => {
    return (
        <div>
            {
                text && <div className={cls.text}>{text}</div>
            }
            <Link className={cls.phone} href="tel:+74951112233">
                +7 (495) 111-22-33
            </Link>
        </div>
    );
};

export default Phone;