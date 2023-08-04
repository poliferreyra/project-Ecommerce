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
              m={4}
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
                <Heading size={{ base: 'xs', md: 'md' }}>
                  {item.prodName}
                </Heading>
                <Textarea
                  defaultValue={item.description}
                  h={{ base: '15vh', md: '15vh', lg: '10vh' }}
                  borderColor="transparent"
                  fontSize={{ base: 'xs', md: 'md' }}
                  isReadOnly
                  overflow="auto"
                  // scrollbar
                  css={{
                    '&::-webkit-scrollbar': {
                      width: '3px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: '#F5E90C',
                      borderRadius: '4px',
                    },
                  }}
                />
                <Button
                  mt={4}
                  size={{ base: 'xs', md: 'sm' }}
                  variant="solid"
                  bg="primary"
                  color="body"
                  _hover={{
                    fontWeight: 'semibold',
                    color: 'secondary',
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
