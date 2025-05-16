import React from 'react'
import Image from '../components/Image'
import Banner1 from '../assets/Banner1.jpg'
import Container from '../components/Container'
import Flex from '../components/Flex'
import two from '../assets/two.png'
import  truck from '../assets/truck.png'
import realod from '../assets/realod.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div>
          <section className='border-b border-[#F0F0F0] '>

<Link to='contact'><Image className='w-full'src={Banner1}/></Link>
<Container>

  <Flex className='justify-between'>
    
 <Flex className="iyem-center gap-x-4 py-[30px]">

<Image src={two}/>
<p className='font-dm font-regular text-[#6D6D6D] text-base'>Two years warranty</p>

</Flex>

<Flex className="iyem-center gap-x-4 py-[30px]">

<Image src={truck}/>
<p className='font-dm font-regular text-[#6D6D6D] text-base'>Free shipping</p>

</Flex>



<Flex className="iyem-center gap-x-4 py-[30px]">

<Image src={realod}/>
<p className='font-dm font-regular text-[#6D6D6D] text-base'>Return policy in 30 days</p>

</Flex>
  </Flex>

</Container>

</section>
    </div>
  )
}

export default Banner