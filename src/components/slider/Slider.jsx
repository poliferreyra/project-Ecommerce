// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Navigation, Pagination, EffectFlip } from 'swiper/modules'
// Import Swiper styles
import './slider.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'
import './styleNav.css'

import { useGetProducts } from '../../hook/useGetProducts'
import {
  Image,
  Button,
  Card,
  CardBody,
  Heading,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Slider = () => {
  const { filterProdOrderBy } = useGetProducts()
  const { addProductToCart } = useContext(CartContext)
  return (
    <VStack>
      <Heading
        ml={3}
        size="xl"
        color="#DF166D"
        lineHeight="80px"
        textAlign="center"
      >
        New Arrivals
      </Heading>
      <Swiper
        className="styleNav"
        modules={[Navigation, Pagination, EffectFlip]}
        effect={'flip'}
        grabCursor={true}
        navigation={true}
        loop={true}
      >
        {filterProdOrderBy.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              m={3}
              h="55vh"
              borderColor="transparent"
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                p={2}
                objectFit="cover"
                maxW={{ base: '40%', sm: '40%', md: '60%' }}
                maxH={{ base: '45%', sm: '55%', md: '70%' }}
                src={item.img}
                alt={item.prodName}
              />

              <CardBody>
                <Heading size={{ base: 'sm', md: 'md' }}>
                  {item.prodName}
                </Heading>
                <Textarea
                  defaultValue={item.description}
                  h={{ base: '18vh', sm: '35vh', md: '30vh', lg: '40vh' }}
                  borderColor="transparent"
                  fontSize={{ base: 'sm', md: 'md' }}
                  isReadOnly
                  overflow="auto"
                  css={{
                    '&::-webkit-scrollbar': {
                      width: '3px', // Ancho barra de desplazamiento
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: 'gray', // Color barra de desplazamiento
                      borderRadius: '4px', // Borde barra de desplazamiento
                    },
                  }}
                />
                <Button
                  mt={2}
                  size={{ base: 'xs', md: 'sm' }}
                  variant="solid"
                  bg="#F5E90C"
                  _hover={{
                    fontWeight: 'semibold',
                    color: '#DF166D',
                  }}
                  onClick={() => addProductToCart(item, 1)}
                >
                  Add to cart
                </Button>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  )
}
