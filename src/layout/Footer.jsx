import Container from '../components/Container'
import React from 'react'
import Flex from '../components/Flex'
import List from '../components/List'
import Image from '../components/Image'
import Logo2 from '../assets/Logo2.png'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    
  <footer className='bg-[#F5F5F3] py-[55px]'>
<Container>

<Flex>

<div className='w-2/12' >
  <h6 className='text-base text-[#262626] font-dm font-bold font-dm pb-4'>MENU</h6>
  <ul className='flex flex-col gap-y-[6px]'>
  <List text="Home"/>
  <List text="Shop"/>
  <List text="About"/>
  <List text="Contact"/>
  <List text="Contact"/>
  <List text="Journal"/>
  </ul>

</div>
<div className='w-2/12' >
  <h6 className='text-base text-[#262626] font-dm font-bold font-dm pb-4'>SHOP</h6>
  <ul className='flex flex-col gap-y-[6px]'>
  <List text="Category 1"/>
  <List text="Category 2"/>
  <List text="Category 3"/>
  <List text="Category 4"/>
  <List text="Category 5"/>
  </ul></div>


<div className='w-2/12' >
  <h6 className='text-base text-[#262626] font-dm font-bold pb-4'>HELP</h6>
  <ul className='flex flex-col gap-y-[6px]'>
  <List text="Privacy Policy"/>
  <List text="Terms & Conditions"/>
  <List text="Special E-shop"/>
  <List text="Shipping"/>
  <List text="Secure Payments"/>
  </ul>

</div>


<div className='w-3/12' >

<h6 className='text-base text-[#262626] font-dm font-bold pb-4'>(052) 611-5711</h6>
<h6 className='text-base text-[#262626] font-dm font-bold pb-4'>company@domain.com</h6>
<p className='text-sm text-[#6D6D6D] font-dm font-regular'>575 Crescent Ave. Quakertown, PA 18951</p>
</div>
<div  className='w-3/12'> 

<Image className="pl-[250px]" src={Logo2}/>

</div>


</Flex>
<Flex className="justify-between">
  <div className=''>

  

 <Flex className="gap-x-6 pt-[65px]">



 <FaFacebook />
  <FaLinkedin />
  <FaInstagram />

 </Flex>

  </div >
  <p className='text-sm font-dm font-regular text-[#6D6D6D] ml-[1100px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
  <div >

  </div>
</Flex>


</Container>

    </footer>


    
  )
}

export default Footer