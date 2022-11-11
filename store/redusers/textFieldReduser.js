import {createSlice} from "@reduxjs/toolkit";

const initialState= {
    textFieldArr:[
        {id: 0, textFieldType: 'text', name:'Имя', placeholder: 'Ваше имя',value:'Не заполнено'},
        {id: 1, textFieldType: 'email', name:'Почта', placeholder: 'Ваш e-mail',value:'Не заполнено'},
        {id: 2, textFieldType: 'textarea', name:'Сообщение', placeholder: 'Ваше сообщение',value:'Не заполнено'}
    ]
}



export const textFieldsSlice = createSlice({
    name: 'textField',
    initialState,
    reducers: {
        textFieldValue(state, action) {
            state.textFieldArr[action.payload.index].value=action.payload.value

        },
    },
});
export default textFieldsSlice.reducer
export const {textFieldValue}=textFieldsSlice.actions