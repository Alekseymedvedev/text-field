import cls from './form.module.scss'
import TextField from "../UI/textField/textField";
import Button from "../UI/button/button";
import Checkbox from "../UI/checkbox/checkbox";
import {useState} from "react";
import {useSelector} from "react-redux";


const Form = ({title}) => {
    const {textFieldArr} = useSelector(state => state.textFieldReduser)
    const [textFieldValue, setTextFieldValue] = useState('')
    const formDataValue = () => {
        textFieldArr.map(item => {
            console.log(item.name, ':', item.value)
        })
    }
    return (
        <div className={cls.flex}>
            <div className={cls.title}>{title}</div>
            {
                textFieldArr && textFieldArr.map((item,index) =>
                    <TextField
                        key={item.id}
                        index={index}
                        textField={item}
                        textFieldValue={textFieldValue}
                        setTextFieldValue={setTextFieldValue}
                    />
                )
            }
            <div className={cls.inner}>
                <Checkbox/>
                <Button onClick={formDataValue}>Отправить</Button>
            </div>
        </div>
    );
};

export default Form;

