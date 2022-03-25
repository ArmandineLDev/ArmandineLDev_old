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
           'template_6e2vhbo',
            e.target,
            'user_NMBxt5fbchpG91jByjl60'
            ).then(response =>{
                console.log(response);
                // navigate('/')
            }).catch(err=> console.log(err));
       
    }
    return (
        
        <>
             <form onSubmit={sendEmail} className=' md:container space-y-4'>
                 <div className="md:flex flex-wrap mt-4 space-y-4">
                     {
                      items.map((item, index) =>{
                    
                    return (
                    <div key={index} className='md:basis-1/2'>
                        <FormInput datas={item} />
                    </div>
                    )
                })}
                 </div>
                 
                <FormTextarea />
                <div className='flex items-center space-x-4'>
                    <input type="checkbox" name="rgpd" id="rgpd" />
                    
                <label htmlFor="rgpd">J'autorise ce site à conserver mes données mes données personnelles transmises par ce site. Aucune exploitation commerciale ne sera faite des données ainsi récoltées. Voir les conditions d\'utliisation.<span className="text-red-500">*</span></label>
                </div>
                
                <button type="submit" className="bg-slate-500 text-white font-bold p-3 rounded-xl">Envoyer</button>
            </form>
            
        </>
    )
};

export default Mailer;
