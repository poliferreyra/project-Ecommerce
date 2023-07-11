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
  Stack,
  Button,
  Card,
  CardBody,
  Heading,
  Container,
  Textarea,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Slider = () => {
  const { filterProdOrderBy } = useGetProducts()
  const { addProductToCart } = useContext(CartContext)
  return (
    <Container maxW="container.sm">
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
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                p={2}
                objectFit="cover"
                maxW={{ base: '40%', sm: '40%', md: '60%' }}
                maxH={{ base: '50%', sm: '60%', md: '70%' }}
                src={item.img}
                alt={item.prodName}
              />

              <Stack>
                <CardBody>
                  <Heading size={{ base: 'sm', md: 'md' }}>
                    {item.prodName}
                  </Heading>
                  <Textarea
                    defaultValue={item.description}
                    h={{ base: '18vh', sm: '25vh', md: '30vh', lg: '40vh' }}
                    fontSize={{ base: 'sm', md: 'md' }}
                    isReadOnly
                    overflow="auto"
                    css={{
                      '&::-webkit-scrollbar': {
                        width: '5px', // Anchura de la barra de desplazamiento
                      },
                      '&::-webkit-scrollbar-thumb': {
                        background: 'gray', // Color de la barra de desplazamiento
                        borderRadius: '4px', // Borde redondeado de la barra de desplazamiento
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
              </Stack>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
