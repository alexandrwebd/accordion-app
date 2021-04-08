import React, {useReducer} from 'react'
import axios from 'axios'
import {accordionReducer} from './accordionReducer'
import {AccordionContext} from "./accordionContext";
import {GET_USER, SHOW_TEXT} from "../types";

export const AccordionState = ({children}) => {

    const initialState = {
        users: []
    }

    // из хука useReducer получаю state и dispatch
    const [state, dispatch] = useReducer(accordionReducer, initialState)

    const requestURL = 'https://jsonplaceholder.typicode.com/users'

    // получаю юзеров по api
    const getUsers = async () => {
        const response = await axios.get(requestURL)
        // обнуляю всем обьектам свойство show на false
        const responsData = response.data.map((item) => {
            item.show = false
            return item
        })
        // диспатчу ответ с сервера по types GET_USER, передаю в редюсер ответ
        dispatch({ type: GET_USER, payload: responsData })
    }

    //   получаю стейт деструктуризацией
    const { users } = state


    const accordionHandler = (el) => {

        // если у бьекта совпадает ключ name с тем который передал при клике то меняю у обьекта значение show на обратное
        // открываються по несколько
        users.forEach(item => item.name === el ? item.show = !item.show : null)
        dispatch({type: SHOW_TEXT, payload: users})

        // открываються по одному
        // users.forEach(item => {
        //     if (item.show) {
        //         item.show = false
        //     }
        //
        // })
        // if (item.name === el) {
        //     item.show = !item.show
        // }
        // dispatch({type: SHOW_TEXT, payload: users})

    }

    return (
        <AccordionContext.Provider value={{accordionHandler, getUsers, users}}>
            {children}
        </AccordionContext.Provider>
    )
}

