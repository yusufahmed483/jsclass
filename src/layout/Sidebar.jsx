import Container from '../components/Container'
import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import sidebar from '../assets/Sidebar.png'
import { IoSearchSharp } from 'react-icons/io5'
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCart } from "react-icons/io5";






const Sidebar = () => {
  return (
    
    <section className='bg-[#F5F5F3] py-6 '>
                 <Container>

<Flex className="items-ce">
  <div className='w-4/12'>
  
   <Flex className='gap-x-2.5 items-center'>
  <Image src={sidebar} />
  <p className='text-[#262626] text-sm font-"DM Sans", sans-serif; font-normal font-regular'>Shop by Category</p>
  </Flex>


  </div>


  <div className='w-8/12 relative'>
        <input className='bg-white py-2 pl-6 pr-16 w-full placeholder:text-[#C4C4C4] placeholder:text-sm placeholder:font-regular
         placeholder:font- "DM Sans", sans-serif; ' type="text" placeholder='Search products...'/>
        <IoSearchSharp className='absolute top-1/2 -translate-y-1/2 right-6'/>
        </div>
  <div className='w-4/12'>
  
  <Flex className="justify-end">
  <FaUser className='' />
  <IoMdArrowDropdown className='mr-10 ml-2.5' />
  <IoCart className='mr-10' />
  </Flex>


  
  </div>
</Flex>

</Container>
            </section>
    
  )
}

export default Sidebar
