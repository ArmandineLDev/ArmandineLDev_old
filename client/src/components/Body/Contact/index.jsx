import React from 'react'
import Separator from '../../commons/Separator'
import Mailer from './Mailer'
import Mailer2 from './Mailer2'

export const Contact = () => {
    return (
        <> 
        <h2 className='h2' id='contact'>Contact</h2>
        <Mailer />
        <Separator />
        <Mailer2 />
        <Separator />
        </>
       
    )
}

