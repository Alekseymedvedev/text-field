import React, {useMemo, useState} from 'react';
import {textFieldValue} from "../store/redusers/textFieldReduser";
import {useDispatch} from "react-redux";

/*
* Этот хук не дает отправить данные пока пользователь не прекратит заполнять поле
* */


export const UseDebounce = () => {
    const dispatch = useDispatch()
    const [debounceHelp, setDebounceHelp] = useState(false)
    const debounce = useMemo(() => {
        let timeout;
        return (index,value) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setDebounceHelp(true)
                dispatch(textFieldValue({index:index,value:value}))
            }, 1000)
        };
    }, [debounceHelp])
    return debounce
};