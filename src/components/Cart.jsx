import React from 'react'
import Image from '../components/Image'

import Flex from '../components/Flex'
import Container from '../components/Container'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { LuGitCompare } from "react-icons/lu";






const Cart = ({price,src,title}) => {
  return (
    <Container>
      <div className='w-[370px] relative group'>
        <div className='w-full'>
          <Image className='w-full' src={src} />
        </div>
        <div className='w-full h-[200px] bg-white absolute -bottom-[110px] left-0 group-hover:bottom-[95px] duration-300 opacity-0 group-hover:opacity-100'>
 
           <ul className='flex flex-col items-end py-6 px-8 gap-y-3 cursor-pointer
'>
            <li className='font-dm font-normal text-[16px]'>Add to Wish List<FaHeart  className='inline text-sm ml-4'/></li>
            <li className='font-dm font-normal text-[16px]'>Compare<LuGitCompare className='inline text-sm ml-4' />     </li>
            <li className='font-dm font-bold text-[16px]'>Add to Cart<FaShoppingCart  className='inline text-sm ml-4'/>     </li>
           </ul>

        </div>
        <Flex className='justify-between items-center pt-6 pb-4'>
          <h4 className='text-[#262626] font-dm font-bold text-[20px]'>{title}</h4>
          <p className='font-dm text-[#767676] text-[16px] font-normal'>{price}</p>
        </Flex>
        <p className='font-dm text-[#767676] text-[16px] font-normal'>Black</p>
        <button className='py-2 px-8 bg-black text-white font-dm font-bold absolute top-5 left-5'>New</button>
      </div>
    </Container>
  )
}

export default Cart
