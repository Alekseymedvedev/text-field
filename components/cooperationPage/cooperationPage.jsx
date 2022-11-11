import cls from './cooperationPage.module.scss'
import Heading from "../heading/heading";
import Form from "../form/form";
import Phone from "../phone/phone";


const CooperationPage = () => {
    return (
        <div className="container">
            <div className={cls.flex}>
                <div className={cls.inner}>
                    <Heading>Сотрудничество</Heading>
                    <Phone text='по вопросам сотрудничества'/>
                </div>
                <Form title='Напишите нам, и мы предоставим всю необходимую информацию.'/>
            </div>
        </div>
    );
};

export default CooperationPage;