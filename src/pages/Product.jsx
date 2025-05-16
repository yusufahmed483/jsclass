import Container from '../components/Container'
import React from 'react'
import Image from '../components/Image'
import product3 from '../assets/product3.png'
import Flex from '../components/Flex'
import Subheadingh from '../components/Subheading'
import { FaRegStar } from "react-icons/fa";
import Button from '../components/button'


function Product() {
  return (
    <section className='py-[150px]'>
      <Container>
    <Flex className='flex-wrap justify-between gap-y-10'>


    <div className='w-[49%]'>
        <Image className='w-full' src={product3}/>
        </div>
        <div className='w-[49%]'>
        <Image className='w-full' src={product3}/>
        </div>
        <div className='w-[49%]'>
        <Image className='w-full' src={product3}/>
        </div>
        <div className='w-[49%]'>
        <Image className='w-full' src={product3}/>
        </div>

    </Flex>
    <Subheadingh className='pt-12 pb-4' text='Product'/>
    <Flex className= 'gap-x-6 items-center'>
      <ul className='flex gap-x-[2px]'>
        <li><FaRegStar className='text-[#FFD881]' /></li>
        <li><FaRegStar className='text-[#FFD881]' /></li>
        <li><FaRegStar className='text-[#FFD881]' /></li>
        <li><FaRegStar className='text-[#FFD881]' /></li>
        <li><FaRegStar className='text-[#FFD881]' /></li>
      </ul>
      <p className=' font-dm text-[16px] font-normal'>1 Review</p>
    </Flex>
    <Flex className='gap-x-[22px]'>
      <p className='font-dm font-normaln text-[16px]'>$88.00</p>
      <p className='font-dm font-bold text-[20px]'>$44.00</p>
    </Flex>
    <Flex className='items-center'>
      <h4 className='font-dm text-[16px] font-bold'>COLOR :</h4>
      <ul className='flex gap-x-[15px] pl-[15px]'>
        <li className='w-[20px] h-[20px] rounded-full hover:scale-125 bg-red-500'></li>
        <li className='w-[20px] h-[20px] rounded-full hover:scale-125 bg-blue-500'></li>
        <li className='w-[20px] h-[20px] rounded-full hover:scale-125 bg-red-500'></li>
        <li className='w-[20px] h-[20px] rounded-full hover:scale-125 bg-green-500'></li>
        <li className='w-[20px] h-[20px] rounded-full hover:scale-125 bg-red-500'></li>
      </ul>
    </Flex>
    <Flex className='items-center'>
      <h4 className='font-dm text-[16px] font-bold text-[#262626]'>SIZE:</h4>
  <select className='py-1 px-6 border border-[1px]'>
     <option value="">S</option>
        <option value="">M</option>
        <option value="">L</option>
        <option value="">XL</option>
        <option value="">XXL</option>
  </select>
    </Flex>
    <Flex className='items-center pt-8'>
      <h4 className='font-dm text-[16px] font-bold text-[#262626]'>QUANITY:</h4>
    <div className='py-2 px-12 border flex gap-x-4'>
      <span>+</span>
      <span>0</span>
      <span>-</span>
    </div>
    </Flex>
    <Flex className='items-center gap-x-[37px] py-8'>
      <h4 className='font-dm text-[16px] font-bold text-[#262626] text-normal'>STATUS:</h4>
      <h5 className='font-dm text-[16px] font-bold text-[#767676] text-normal'>IN STOCK</h5>
 
    </Flex>

    <Flex className='gap-x-[20px] py-8 border-b border-black w-49'>
      <Button text="ADD TO WISH LIDT"/>
    <Button text="ADD TO CART"/>
    </Flex>

    <div className='gap-x-[20px] py-8 border-b border-black w-49'>
   
<h4 className='font-dm text-[16px] font-bold text-[#262626]'>QUANITY:</h4>

    </div>


      </Container>
    </section>
  )
}

export default Product