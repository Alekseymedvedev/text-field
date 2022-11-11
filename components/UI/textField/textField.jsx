import cls from './textField.module.scss'
import {useState} from "react";
import {UseDebounce} from "../../../hook/useDebounce";


const TextField = ({textField, index, TextFieldValue, setTextFieldValue}) => {
    const [active, setActive] = useState(false)
    const debounse = UseDebounce()
    const labelClass = [cls.label]
    if (active) {
        labelClass.push(cls.active)
    }
    const handlerChange = (value) => {
        setTextFieldValue(value)
        setActive(true)
        debounse(index, value)
        if (value === '') {
            setActive(false)
        }
    }
    return (
        <label className={labelClass.join(' ')}>
            <span className={cls.text}>{textField.placeholder}</span>
            {
                textField.textFieldType && textField.textFieldType === 'textarea'
                    ?
                    <textarea
                        rows="2"
                        value={TextFieldValue}
                        onChange={e => handlerChange(e.target.value)}
                        className={cls.textarea}
                    ></textarea>
                        :
                    <input
                        value={TextFieldValue}
                        onChange={e => handlerChange(e.target.value)}
                        className={cls.input} type={textField.textFieldType}
                    />
            }
        </label>
    );
};

export default TextField;