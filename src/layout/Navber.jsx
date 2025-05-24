import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Image from '../components/Image';
import Logo from '../assets/Logo.png';
import List from '../components/List';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { breadbutton } from '../slice/breadcrum';

const Navbar = () => {

  let dispatch = useDispatch()
   let handleCLick=(item)=>{
     dispatch(breadbutton(item))
    
   }
  return (
    <nav className='py-8'>
      <Container>
        <Flex>
          <div className='w-4/12'>
            <Image src={Logo} />
          </div>

          <div className='w-8/12'>
            <ul className='flex gap-x-10'>
              <Link onClick={()=>handleCLick("Home")} to='/'><List text="Home" /></Link>
              <Link onClick={()=>handleCLick("Shop")} to='/shop'><List text="Shop" /></Link>
              <Link onClick={()=>handleCLick("About")} to='/about'><List text="About" /></Link>
              <Link onClick={()=>handleCLick("Contact")} to='/contact'><List text="Contacts" /></Link>
              <Link onClick={()=>handleCLick("Journal")} to='/journal'><List text="Journal" /></Link>
            </ul>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
