import Container from '../components/Container'
import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ad1 from '../assets/ad1.png'
import ad2 from '../assets/ad2.png'
import ad3 from '../assets/ad3.JPG'
import { Link } from 'react-router-dom'

const Add = () => {
  return (
    <div>
        <section className='pt-[140px] pb-[128px]'>
            <Container>
              <Flex>
              <div className='w-1/2'>
              <Link to='contact'><Image className='w-full' src={ad1}/></Link>
              </div>
               <div className='w-1/2 '>
               
               <Link to='contact'><Image className='w-full pl-[40px] pb-[40px]' src={ad2}/></Link>
               <Link tp='contact'><Image className='w-full pl-[40px] pt-[36px]' src={ad3}/></Link>
               </div>
              </Flex>
            </Container>
        </section>
    </div>
  )
}

export default Add