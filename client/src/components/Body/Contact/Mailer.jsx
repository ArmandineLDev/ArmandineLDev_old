import React, {useState} from 'react';
// import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

const Mailer = () => {
    const [items] = useState([
        {
            imputLabel:"Votre nom",
            name:"lastname",
            type:"text",
            placeholder:"Saisissez votre nom",
        },
      
        {
            imputLabel:"Votre courriel",
            name:"email",
            type:"email",
            placeholder:"Saisissez votre email",
        },
    ]);

    // let navigate = useNavigate();
    const sendEmail =(e) =>{
        e.preventDefault();
        emailjs.sendForm(
            'service_27g25ng',
            'template_4mh0g0y',
            e.target,
            'user_NMBxt5fbchpG91jByjl60'
            ).then(response =>{
                console.log(response);
                // navigate('/')
            }).catch(err=> console.log(err));
       
    }
    return (
        
        <>
             <form onSubmit={sendEmail} className='space-y-4'>
                 {
                      items.map((item, index) =>{
                    
                    return (
                    <div key={index} className=''>
                        <FormInput datas={item} />
                    </div>
                    )
                })}
                <FormTextarea />
                <button type="submit" className="bg-gray-500 text-red-700 font-bold p-3 rounded">Envoyer</button>
            </form>
            
        </>
    )
};

export default Mailer;
