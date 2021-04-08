import {GET_USER, SHOW_TEXT} from "../types";

const handlers = {
    [GET_USER]: (state, { payload }) => ({
        // сокращаю код, деструктуризация payload
        ...state,
        users: payload
    }),
    [SHOW_TEXT]: (state, { payload }) => ({
    ...state,
        users: payload
    }),
    DEFAULT: (state) => state,
}

// обьектный вариант редюсера проверяю по ключам обьекта handlers по аналогии с switch case
export const accordionReducer = (state, action) => {
    // получаю хендлер по ключу и если такого нету выполняю дефолтное действие
    const handler = handlers[action.type] || handlers.DEFAULT
    //   возвращаю функцию handler с параметрами state и action
    return handler(state, action)
}