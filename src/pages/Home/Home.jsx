import React from 'react';

import About from '../../components/blocks/about/About';
import Galery from '../../components/blocks/galery/Galery';
import Contacts from '../../components/blocks/contacts/Contacts';


function Home() {
  return (
    <main>
      <About/>
      <Galery />
      <Contacts />
    </main>
  );
}

export default Home;
