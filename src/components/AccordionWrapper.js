import React, {useContext, useEffect, Fragment} from 'react'
import './AccordionWrapper.css'
import {AccordionContext} from "../context/accordion/accordionContext";


export const AccordionWrapper = () => {

    const {accordionHandler, getUsers, users} = useContext(AccordionContext)

    useEffect(() => {
        getUsers()
    }, [])

   return (
       <Fragment>

           {users.map((item, index) => (
               <div className={item.show ? 'AccordeonsItem active' : 'AccordeonsItem'} key={index + 1}  onClick={() => accordionHandler(item.name)}>
                   <div className='AccordeonsItemTitle'>{item.name}</div>
                   <div className='AccordeonsItemContent'>{item.email}</div>
               </div>
           ) )}

       </Fragment>
    )
}