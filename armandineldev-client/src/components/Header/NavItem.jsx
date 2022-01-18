import React from 'react'

const NavItem = ({name, link}) => {
    return (
        <div>
          <a href={link}>{name}</a>
        </div>
    )
}

export default NavItem
