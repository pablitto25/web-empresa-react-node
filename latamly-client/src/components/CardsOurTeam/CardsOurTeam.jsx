import React, { useState } from 'react';
// eslint-disable-next-line
import All from './All'
import Product from './Product'
import NavbarOurTeam from '../NavbarOurTeam/NavbarOurTeam'

const CardsOurTeam = () =>{

    const [activeSection, setActiveSection] = useState('all');

    const handleNavItemClick = (section) => {
        setActiveSection(section);
  }

    return(


        <div>
            <NavbarOurTeam onItemClick={handleNavItemClick} setActiveSection={setActiveSection} />
            {activeSection === 'all' && <All/>}
            {activeSection === 'product' && <Product/>}
        </div>


    )

}

export default CardsOurTeam;