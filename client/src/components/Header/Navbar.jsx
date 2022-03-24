import React from 'react';
import NavItem from './NavItem';
import { itemsDatas } from '../../datas/menu';

const Navbar = () => {
    const items = itemsDatas;
   
    return (
        <>
            {
         items.map((item) => {
           return(
           <div key={item.id}>
              <NavItem name={item.menu} link={item.link}/>
           </div>
          
           )
           
         })
         }
        </>
    )
}

export default Navbar
