import React, {useState} from 'react';
import NavItem from './NavItem';

const Navbar = () => {
    const [items] = useState([

        {menu : "A propos",
        link : "#about",
        }
      ,
        {menu : "Projets",
        link : "#project"}
      ,
      {  menu : "Compétences",
        link : "#skills"
      },
      {  menu : "Contactez-moi",
        link : "#contact"
      },
      {  menu : "Resume",
        link : "/"
      },
      
      ])
    return (
        <div className="hidden space-x-4 text-sm lg:text-base lg:space-x-8 md:flex font-medium items-center">
            {
         items.map((item, index) => {
           return(
           <div key={index}>
              <NavItem name={item.menu} link={item.link}/>
           </div>
          
           )
           
         })
         }
        </div>
    )
}

export default Navbar
