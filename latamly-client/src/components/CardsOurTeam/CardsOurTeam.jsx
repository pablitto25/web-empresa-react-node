import React, { useState } from 'react';
// eslint-disable-next-line
import All from './All'
import Product from './Product'
import NavbarOurTeam from '../NavbarOurTeam/NavbarOurTeam'
import Commercial from './Commercial';
import Marketing from './Marketing';
import Administration from './Administration';
import Operations from './Operations';
import Strategic from './Strategic';
import Rrhh from './Rrhh';

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
            {activeSection === 'commercial' && <Commercial/>}
            {activeSection === 'marketing' && <Marketing/>}
            {activeSection === 'administration' && <Administration/>}
            {activeSection === 'operations' && <Operations/>}
            {activeSection === 'strategic' && <Strategic/>}
            {activeSection === 'rrhh' && <Rrhh/>}

        </div>


    )

}

export default CardsOurTeam;