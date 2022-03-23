import React, {useState} from 'react';
import NavItem from './NavItem';
import { itemsDatas } from '../../datas/menu';

const Navbar = () => {
    const items = itemsDatas;
   
    return (
        <div className="hidden space-x-4 text-sm lg:text-base lg:space-x-8 md:flex font-medium items-center">
            {
         items.map((item) => {
           return(
           <div key={item.id}>
              <NavItem name={item.menu} link={item.link}/>
           </div>
          
           )
           
         })
         }
        </div>
    )
}

export default Navbar
