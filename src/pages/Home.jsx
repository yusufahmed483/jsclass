import React from 'react';
import Banner from '../layout/Banner'
import Add from '../layout/Add'
import Cart from '../components/Cart'
import Container from '../components/Container'
import Subheading from '../components/Subheading'
import Flex from '../components/Flex'
import Image from '../components/Image'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import promotion from '../assets/promotion.png'

 


const Home = () => {
  return (
    <div>
    <Banner/>
    <Add/>

    <Container>
    <Subheading className="pb-10" text='New Arrivals'/>
    <Flex className='justify-between'>

    <Cart src={product1}   price='30$'  title="product one"/>
    <Cart src={product1}   price='20$' title="product two"/>
    <Cart src={product2}   price='$44.00' title="product three"/>
    <Cart src={product3}  price='20$'  title="product four"/>

    </Flex>
    <Subheading className="pb-10 mt-[118px]" text='Our Bestsellers'/>
    <Flex className='justify-between mb-[130px]'>

    <Cart src={product1}   price='30$'  title="product one"/>
    <Cart src={product1}   price='20$' title="product two"/>
    <Cart src={product2}   price='$44.00' title="product three"/>
    <Cart src={product3}  price='20$'  title="product four"/>

    </Flex>
    </Container>
    <Container>
      <Image className='pb-[128px]' src={promotion}/>
    </Container>


    
    <Container>
    <Subheading className="pb-10" text='Special Offers'/>
    <Flex className='justify-between'>

    <Cart src={product1}   price='30$'  title="product one"/>
    <Cart src={product1}   price='20$' title="product two"/>
    <Cart src={product2}   price='$44.00' title="product three"/>
    <Cart src={product3}  price='20$'  title="product four"/>

    </Flex>
    </Container>

    </div>
  );
};

export default Home;
